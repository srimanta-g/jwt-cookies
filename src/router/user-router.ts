import { Router, Request, Response } from 'express';
import { IUser } from '../model/mongoose-model/user';
import { addNewUser } from '../service/user-service';
import { authenticateUserMiddleware } from '../middleware/auth-middleware';
import bcryptjs from  'bcryptjs';

const userRouter = Router();

userRouter.post('/user/add-new-user', (req: Request, res:Response) => {
    let user : IUser = {
        username : req.body.username,
        password : bcryptjs.hashSync(req.body.password),
        firstName : req.body.firstname,
        lastName : req.body.lastname
    }

    addNewUser(user).then((result) => {
        if(result.isSuccess === false) {
            res.status(500).send(result);
        }
        res.cookie('token', result.body?.token)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send({
            "message" : error.message
        })
    })
}) ;

userRouter.get('/user/:username', authenticateUserMiddleware, async (req:Request, res:Response) => {
    const value = res.locals.value;
    if(res.locals.isAuthenticated === false) {
        res.status(403).send()
    }
    res.send(value);
})



export { userRouter };