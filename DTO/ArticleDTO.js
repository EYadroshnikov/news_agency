export default class ArticleDTO {

    constructor(data = null) {
        this.title = data?.title || "title";
        this.author = data?.author || "author";
        this.text = data?.text || "text";
    }
}