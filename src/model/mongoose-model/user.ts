import {Model, Schema, model} from "mongoose";
import JsonWebTokenError from "jsonwebtoken";

interface IUser {
    username : string,
    password : string,
    firstName? : string,
    lastName? : string,
    token ?: string
}

interface IUserMethods {
    generateToken() : string;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.method('generateToken', async function(this : IUser) {
    const user = this;
    //@ts-ignore
    const token = JsonWebTokenError.sign({ _id : this._id.toString() }, process.env.SECRET_KEY);
    user.token = token;
    return token
})

const UserMongooseModel = model<IUser, UserModel>('User', userSchema);

export { IUser, UserMongooseModel };