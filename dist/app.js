"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const connect_db_1 = require("./db/connect-db");
const user_router_1 = require("./router/user-router");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(user_router_1.userRouter);
// @ts-ignore
(0, connect_db_1.connectToDatabase)(process.env.MONGODB_URL);
app.listen(process.env.PORT, () => {
    console.log(chalk_1.default.bgGreen("Server Started"));
});
