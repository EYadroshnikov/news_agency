import express from "express";
import articleController from "../controllers/articleController.js";

const articleSearchRouter = express.Router();

articleSearchRouter.post("/byTitle", articleController.findArticleByTitle);
articleSearchRouter.post("/byID", articleController.findArticleByID);

export default articleSearchRouter;