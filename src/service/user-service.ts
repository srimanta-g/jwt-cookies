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
        const token = await newUserModel.generateToken();
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

const getUserById = async (id : string) => {
    try {
        const u = await UserMongooseModel.findById(id);
        return u;
    }catch(error) {
        //@ts-ignore
        console.log(chalk.bgRed(error.message));
    }
}

export { addNewUser, getUserById };