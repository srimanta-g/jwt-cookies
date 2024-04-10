import { IUser } from "../mongoose-model/user";

interface IUserServiceResponse {
    isSuccess : boolean,
    message : string,
    body?: IUser
}

export { IUserServiceResponse };