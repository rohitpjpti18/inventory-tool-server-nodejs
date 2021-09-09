import express, { NextFunction, Request, Response } from 'express';
import verifyToken from '../auth/verifytoken';
import User from '../objects/user';
import userservice from '../service/userservice';

let userrouter = express.Router();

userrouter.post('/login', async (req, res, next) => {
    //console.log("Here")
    const {email, password} = req.body;

    let token = await userservice.verifyCredentials(email, password);
    res.json({token: token});
});

userrouter.post('/register', async (req: Request, res: Response, next: NextFunction)=>{
    try{
        //res.send("Register Route");
        let newuser = new User(req.body);

        res.send(await userservice.registerUser(newuser));
        res.status(200).end();
    }catch(err){
        next(err);
    }
});

userrouter.get('/get-user/:username', verifyToken, async(req: Request, res: Response, next: NextFunction)=>{
    try{
        let username = req.params.username;
        //console.log(username);
        
        let user = await userservice.getUserBy("username", username);

        if(user){
            res.json({user: user});
        }else{
            res.json({notFound: 'user not found'});
        }

    }catch(err){
        next(err);
    }
});

export default userrouter;