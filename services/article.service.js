import articlesModel from "../models/article.model.js";

export default {
    async getAllArticles() {
        return await articlesModel.getAll();
    },

    async createArticle(article) {
        return await articlesModel.createArticle(article);
    },

    async deleteArticleByID(id) {
        return await articlesModel.deleteArticleByID(id);
    },

    async findArticleByTitle(desiredTitle) {
        return await articlesModel.findArticleByTitle(desiredTitle);
    },

    async findArticleByID(id) {
        return await articlesModel.findArticleByID(id);
    }
}

