import chalk from 'chalk';
import { IUser, UserMongooseModel } from '../model/mongoose-model/user';
import { IUserServiceResponse } from '../model/response/response-service';

const addNewUser = async (user: IUser) : Promise<IUserServiceResponse> => {
    const newUserModel = new UserMongooseModel(user);
    const response : IUserServiceResponse = {
        isSuccess : false,
        message : ""
    }
    try {
        await newUserModel.save();
        response.isSuccess = true;
        response.message = "User Successfully added to database";
        response.body = newUserModel;
    } catch(error) {
        //@ts-ignore
        console.log(chalk.bgRed(error.message));
        //@ts-ignore
        response.message = error.message;
    }
    return response;
}