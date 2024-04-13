"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.addNewUser = void 0;
const chalk_1 = __importDefault(require("chalk"));
const user_1 = require("../model/mongoose-model/user");
const addNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUserModel = new user_1.UserMongooseModel(user);
    const response = {
        isSuccess: false,
        message: ""
    };
    try {
        const token = yield newUserModel.generateToken();
        yield newUserModel.save();
        response.isSuccess = true;
        response.message = "User Successfully added to database";
        response.body = newUserModel;
    }
    catch (error) {
        //@ts-ignore
        console.log(chalk_1.default.bgRed(error.message));
        //@ts-ignore
        response.message = error.message;
    }
    return response;
});
exports.addNewUser = addNewUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const u = yield user_1.UserMongooseModel.findById(id);
        return u;
    }
    catch (error) {
        //@ts-ignore
        console.log(chalk_1.default.bgRed(error.message));
    }
});
exports.getUserById = getUserById;
