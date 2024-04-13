import { Request, Response, NextFunction} from 'express';
import { getUserById } from '../service/user-service';
import JsonWebTokenError from "jsonwebtoken";
import chalk from 'chalk';

const authenticateUserMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const token = req.cookies.token;
        //@ts-ignore
        const userId = JsonWebTokenError.verify(token, process.env.SECRET_KEY);
        try {
            const value = await getUserById(userId._id);
            if(value === null) {
                res.locals.isAuthenticated = false;
            } else {
                res.locals.isAuthenticated = true;
                res.locals.value = value;
            }
        }catch(error) {
            //@ts-ignore
            console.log(chalk.bgRed(error.message));
        }
    } catch(error) {
        res.locals.isAuthenticated = false;
        //@ts-ignore
        console.log(chalk.bgRed(error.message));
    }
    next();
}

export { authenticateUserMiddleware }