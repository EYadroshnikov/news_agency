import express from "express";
import articleController from "../controllers/article.controller.js";
import {body} from "express-validator";
import {checkErrors} from "../middlewares/request-middleware.validation.js";


const articleRouter = express.Router();

//TODO: refactor this shit
const titleValidation = body('title')
    .trim()
    .isLength({min: 5, max: 20})
    .withMessage('Length should be from 5 to 20 symbols')

const idValidation =  body('id')
    .isInt()


articleRouter.get('/all-articles', articleController.getAllArticles);
articleRouter.post('/create-article', titleValidation, checkErrors, articleController.createArticle);
articleRouter.delete('/delete-article', idValidation, checkErrors, articleController.deleteArticleByID);

export default articleRouter;