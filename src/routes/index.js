import express from "express";
import { userRouter } from "./userRouter";
import { authenticationRouter } from "./authenticationRouter";
const Router = express.Router();
Router.use("/", authenticationRouter);
Router.use("/users", userRouter);

export const router = Router;
