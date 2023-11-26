import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
import campaignController from "../controller/campaign-controller.js";
import historyController from "../controller/history-controller.js";

const privateRouter = express.Router()

privateRouter.use(authMiddleware);

privateRouter.post('/api/logout', userController.logout); // logout
privateRouter.get('/api/campaign', campaignController.getAllCampaign)
privateRouter.get('/api/campaign/:campaignId', campaignController.findCampaign)

privateRouter.post('/api/donate', historyController.makeADonation)
privateRouter.get("/api/history", historyController.getAllHistory)

export { privateRouter }