import express from "express";
import { register } from "../controllers/authController";
const Router = express.Router();

Router.route("/register").post(register);
export const authenticationRouter = Router;
