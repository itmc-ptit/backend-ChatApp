import express from "express";
const Router = express.Router();
Router.route("/").get((req, res) => res.send("Hello World"));
export const userRouter = Router;
