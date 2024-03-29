import express from 'express'
import bodyParser from "body-parser";
import articleRouter from "./routes/article.router.js";
import articleSearchRouter from "./routes/article-search.router.js";
import createConnection from "./models/connection.js";
import 'dotenv/config';
import routes from "./routes/index.js";


const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use("/api", routes);

export const dbConnection = await createConnection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

