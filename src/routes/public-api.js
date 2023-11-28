import express from "express";
import userController from "../controller/user-controller.js";
import campaignController from "../controller/campaign-controller.js";
const publicRouter = new express.Router();

publicRouter.post("/api/register", userController.register);
publicRouter.post("/api/login", userController.login);
publicRouter.get("/test", campaignController.campaignByNearest);

export { publicRouter };
