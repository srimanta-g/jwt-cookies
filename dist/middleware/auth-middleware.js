"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUserMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateUserMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    //@ts-ignore
    const userId = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
    console.log(userId);
    next();
};
exports.authenticateUserMiddleware = authenticateUserMiddleware;
