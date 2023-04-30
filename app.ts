import express from "express";
import bodyParser from "body-parser";
import todosRoutes from './routes/todo'


const app = express();

app.use(bodyParser.json())

app.use(todosRoutes)

app.listen(3000);