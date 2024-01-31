import express from "express";
import articleController from "../controllers/article.controller.js";
import {query, check} from "express-validator";
import {checkErrors, idValidation, titleValidation} from "../middlewares/article-middleware.validation.js";

const articleSearchRouter = express.Router();


articleSearchRouter.get("/by-title", titleValidation, checkErrors, articleController.findArticleByTitle);
articleSearchRouter.get("/by-id", idValidation, checkErrors, articleController.findArticleByID);

export default articleSearchRouter;