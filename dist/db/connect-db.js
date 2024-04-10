"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDatabase = (url) => {
    mongoose_1.default.connect(url).then(() => {
        console.log(chalk_1.default.bgGreen("Connected to MongoDB Database"));
    }).catch((error) => {
        console.log(error.message);
    });
};
exports.connectToDatabase = connectToDatabase;
