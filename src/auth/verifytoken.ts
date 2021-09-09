import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction):void => {
        let token:any;
        try{
            token = req.headers['x-access-token'];
        }catch(err: any){

        }

        if(!token){
            let err = new Error("No Token Provided");
            throw err;
        }
        try{
            const decoded = jwt.verify(token, "sdklfsalkfjsaldkf");
            res.locals.session = decoded;
        }catch(err: any){
            let err = new Error("Invalid Token");
            throw err;
        }

        next();
    }

export default verifyToken;