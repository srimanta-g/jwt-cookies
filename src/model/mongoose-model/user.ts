import {Schema, model} from "mongoose";

interface IUser {
    username : string,
    password : string,
    firstName? : string,
    lastName? : string,
    token ?: string
}

const userSchema = new Schema<IUser>({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
    }, 
    lastName : {
        type: String
    },
    token : {
        type: String
    }
});

const UserMongooseModel = model<IUser>('User', userSchema);

export { IUser, UserMongooseModel };