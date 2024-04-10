"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMongooseModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    token: {
        type: String
    }
});
const UserMongooseModel = (0, mongoose_1.model)('User', userSchema);
exports.UserMongooseModel = UserMongooseModel;
