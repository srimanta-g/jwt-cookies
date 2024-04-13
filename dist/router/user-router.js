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
exports.userRouter = void 0;
const express_1 = require("express");
const user_service_1 = require("../service/user-service");
const auth_middleware_1 = require("../middleware/auth-middleware");
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
        var _a;
        if (result.isSuccess === false) {
            res.status(500).send(result);
        }
        res.cookie('token', (_a = result.body) === null || _a === void 0 ? void 0 : _a.token);
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send({
            "message": error.message
        });
    });
});
userRouter.get('/user/:username', auth_middleware_1.authenticateUserMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = res.locals.value;
    if (res.locals.isAuthenticated === false) {
        res.status(403).send();
    }
    res.send(value);
}));
