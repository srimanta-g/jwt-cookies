"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_service_1 = require("../service/user-service");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/user/add-new-user', (req, res) => {
    let user = {
        username: req.body.username,
        password: bcryptjs_1.default.hashSync(req.body.password),
        firstName: req.body.firstname,
        lastName: req.body.lastname
    };
    (0, user_service_1.addNewUser)(user).then((result) => {
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send({
            "message": error.message
        });
    });
});
