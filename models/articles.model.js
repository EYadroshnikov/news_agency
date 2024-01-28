import {dbConnection} from "../index.js";

export default {
    async getAll() {
        let [results, fields] = await dbConnection.query("SELECT * FROM `articles`");
        return results;
    },

    async createArticle(article) {
        let {title, author, text} = article;
        let query = `INSERT INTO articles (title, author, text) VALUES ('${title}', '${author}', '${text}')`;
        return dbConnection.query(query);
    },

    async deleteArticleByID(id) {
        return dbConnection.query(`DELETE FROM articles WHERE id = ${id}`);
    },

    async findArticleByTitle(desiredTitle) {
        let [results, fields] = await dbConnection.query(`SELECT * FROM articles WHERE title LIKE '%${desiredTitle}%'`);
        return results;
    },

    async findArticleByID(id) {
        let [results, fields] = await dbConnection.query(`SELECT * FROM articles WHERE id = ${id}`);
        return results;
    },

}