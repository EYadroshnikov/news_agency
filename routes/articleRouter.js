import express from "express";
import articleController from "../controllers/articleController.js";

const articleRouter = express.Router();

articleRouter.get('/all-articles', articleController.getAllArticles);
articleRouter.post('/create-article', articleController.createArticle);
articleRouter.delete('/delete-article', articleController.deleteArticleByID);

export default articleRouter;