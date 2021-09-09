import validation from '../utilities/validation';
import usermodel from '../model/usermodel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../objects/user';


let userservice:any = {};

userservice.registerUser = async (newUser:User) => {
    validation.validateNewUser(newUser);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    

    return await usermodel.addUser(newUser);
}

userservice.verifyCredentials = async (email:string, password:string) =>{
    let user = await usermodel.getUserByEmail(email);
    console.log(password);
    console.log(user);
    //encrpytpass = await bcrypt.hash(password, 10)
    if(user.length === 1){

        let match = bcrypt.compareSync(password, user[0].password);
        let token = "";
        if(match){
            token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY as string,
                {
                  expiresIn: "2h",
                })
        }

                

        
        return token;
    }else{
        let err = new Error(`User with email doesn't exist`);
        throw err;
    }
}

userservice.getUserBy = async (type:string, value:string) => {
    let data;
    if(type === "userId"){

    }
    if(type === "username"){
        data = await usermodel.getUserByUsername(value);
    }else if(type == "email"){
        data = await usermodel.getUserByEmail(value);
    }

    return data;

}


export default userservice;