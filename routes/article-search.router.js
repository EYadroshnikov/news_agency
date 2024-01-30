import express from "express";
import articleController from "../controllers/article.controller.js";
import {body, query} from "express-validator";
import {checkErrors} from "../middlewares/request-middleware.validation.js";

const articleSearchRouter = express.Router();

//TODO: refactor this shit
const titleValidation = query('desiredTitle')
    .trim()
    .isLength({min: 5, max: 20})
    .withMessage('Length should be from 5 to 20 symbols')

const idValidation =  query('id')
    .isInt()

articleSearchRouter.get("/by-title", titleValidation, checkErrors, articleController.findArticleByTitle);
articleSearchRouter.get("/by-id", idValidation, checkErrors, articleController.findArticleByID);

export default articleSearchRouter;