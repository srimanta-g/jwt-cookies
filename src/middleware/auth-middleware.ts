import { Request, Response, NextFunction} from 'express';
import JsonWebTokenError from "jsonwebtoken";

const authenticateUserMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.token;
    //@ts-ignore
    const userId = JsonWebTokenError.verify(token, process.env.SECRET_KEY);
    console.log(userId);
    next();
}

export { authenticateUserMiddleware }