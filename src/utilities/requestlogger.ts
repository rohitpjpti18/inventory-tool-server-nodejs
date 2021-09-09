import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

const requestlogger = (req: Request, res: Response, next: NextFunction) => {
    try{
        let logMessage = `${new Date().toTimeString()} - ${req.method} : ${req.url}`;
        console.log(logMessage);
        next();
    }catch(err){
        next(err);
    }
}

export default requestlogger;