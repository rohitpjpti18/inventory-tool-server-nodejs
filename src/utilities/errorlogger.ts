import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err){
        console.log(err.message);
        fs.appendFile('ErrorLogger.txt', new Date() + ' : ' + err.stack + '\n', (error)=>{
            if(error){
                console.log("Logging error failed");
            }
        });
        res.status(500);
        res.json({"error": err.message});
    }
    next();
}

export default errorLogger;