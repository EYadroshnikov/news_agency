import articleRouter from "./article.router.js";
import articleSearchRouter from "./article-search.router.js";
import express from "express";

const router = express.Router();

const defaultRoutes = [
    {
        path: '/articles',
        route: articleRouter
    },
    {
        path: '/articles/search',
        route: articleSearchRouter
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;