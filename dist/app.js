"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const connect_db_1 = require("./db/connect-db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//@ts-ignore
(0, connect_db_1.connectToDatabase)(process.env.MONGODB_URL);
app.listen(process.env.PORT, () => {
    console.log(chalk_1.default.bgGreen("Server Started"));
});
