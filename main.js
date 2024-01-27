import express from 'express'
import bodyParser from "body-parser";
import articleRouter from "./routes/articleRouter.js";
import articleSearchRouter from "./routes/articleSearchRouter.js";
import createConnection from "./models/connection.js";
import 'dotenv/config';


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api/articles", articleRouter);
app.use("/api/articles/search", articleSearchRouter);

export const dbConnection = await createConnection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

