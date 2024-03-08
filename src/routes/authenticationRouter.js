import express from "express";
import { login } from "../controllers/userController";
const Router = express.Router();

Router.route("/login").post(login);
export const authenticationRouter = Router;
