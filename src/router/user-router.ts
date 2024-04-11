import { Router, Request, Response } from 'express';
import { IUser } from '../model/mongoose-model/user';
import { addNewUser } from '../service/user-service';
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
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send({
            "message" : error.message
        })
    })
}) ;

// userRouter.get('/user/:username', (req:Request, res:Response) => {
//     getUserByUsername(req.params['username']).then((result) => {
//         console.log(result);
//     });
// })

export { userRouter };