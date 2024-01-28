import express from "express";
import articleController from "../controllers/article.controller.js";

const articleSearchRouter = express.Router();

articleSearchRouter.get("/by-title", articleController.findArticleByTitle);
articleSearchRouter.get("/by-id", articleController.findArticleByID);

export default articleSearchRouter;