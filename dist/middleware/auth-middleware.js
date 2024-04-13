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
exports.authenticateUserMiddleware = void 0;
const user_service_1 = require("../service/user-service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const chalk_1 = __importDefault(require("chalk"));
const authenticateUserMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        //@ts-ignore
        const userId = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        try {
            const value = yield (0, user_service_1.getUserById)(userId._id);
            if (value === null) {
                res.locals.isAuthenticated = false;
            }
            else {
                res.locals.isAuthenticated = true;
                res.locals.value = value;
            }
        }
        catch (error) {
            //@ts-ignore
            console.log(chalk_1.default.bgRed(error.message));
        }
    }
    catch (error) {
        res.locals.isAuthenticated = false;
        //@ts-ignore
        console.log(chalk_1.default.bgRed(error.message));
    }
    next();
});
exports.authenticateUserMiddleware = authenticateUserMiddleware;
