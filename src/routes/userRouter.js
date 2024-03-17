import express from "express";
import { GetInformationUser } from "~/controllers/userController";
import { authGuard } from "~/middlewares/authMiddleware";
const Router = express.Router();
Router.route("/").get((req, res) => res.send("Hello World"));
Router.route("/:id").get(authGuard, GetInformationUser);
export const userRouter = Router;
