import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import requestLogger from './utilities/requestlogger';
import errorLogger from './utilities/errorlogger';

dotenv.config();

const PORT = 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(requestLogger);
app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.send("<h1>Hello World</h1>");
});
app.use(errorLogger);


app.listen(PORT, ()=> console.log(`Running on ${PORT}`));