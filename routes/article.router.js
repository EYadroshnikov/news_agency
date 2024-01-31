import express from "express";
import articleController from "../controllers/article.controller.js";
import {body} from "express-validator";
import {checkErrors, idValidation, titleValidation} from "../middlewares/article-middleware.validation.js";


const articleRouter = express.Router();


articleRouter.get('/all-articles', articleController.getAllArticles);
articleRouter.post('/create-article', titleValidation, checkErrors, articleController.createArticle);
articleRouter.delete('/delete-article', idValidation, checkErrors, articleController.deleteArticleByID);

export default articleRouter;