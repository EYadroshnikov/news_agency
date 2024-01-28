import articleService from '../services/article.service.js';
import ArticleDto from "../DTO/article.dto.js";

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
            let article = new ArticleDto({
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
            let found = await articleService.findArticleByTitle(req.query.desiredTitle);
            if (found.length === 0) {
                res.status(404).send(`article with title ${req.query.desiredTitle} not found`);
            } else {
                res.send(found)
            }
        } catch (e) {
            res.status(500).send("server error\n" + e);
        }
    },

    async findArticleByID(req, res) {
        try {
            let found = await articleService.findArticleByID(req.query.id);
            if (found.length === 0) {
                res.status(404).send(`article with id ${req.query.id} not found`);
            } else {
                res.send(found)
            }

        } catch (e) {
            res.status(500).send("server error\n" + e);
        }
    }
}

