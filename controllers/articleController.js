import articleService from '../services/articleService.js';
import ArticleDTO from "../DTO/ArticleDTO.js";

export default {
    async getAllArticles(req, res) {
        try {
            let allArticles = await articleService.getAllArticles();
            res.send(allArticles);
        } catch (e) {
            res.status(500).send("server error\n" + e);
        }

    },

    async createArticle(req, res) {
        try {
            let article = new ArticleDTO({
                title: req.body.title,
                author: req.body.author,
                text: req.body.text
            });

            let createdArticle = await articleService.createArticle(article)
            res.send(createdArticle);
        } catch (e) {
            console.error(e);
            res.status(500).send("server error\n" + e);
        }
    },

    async deleteArticleByID(req, res) {
        try {
            let deleted = await articleService.deleteArticleByID(req.body.id);
            res.send(deleted)
        } catch (e) {
            res.status(500).send("server error\n" + e);
        }
    },

    async findArticleByTitle(req, res) {
        try {
            let found = await articleService.findArticleByTitle(req.body.desiredTitle);
            res.send(found);
        } catch (e) {
            res.status(500).send("server error\n" + e);
        }
    },

    async findArticleByID(req, res) {
        try {
            let found = await articleService.findArticleByID(req.body.id);
            res.send(found)
        } catch (e){
            res.status(500).send("server error\n" + e);
        }
    }
}

