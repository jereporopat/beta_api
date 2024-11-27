const express = require ("express");
const morgan = require ("morgan");
const movieRouter = require("../router/movie.router");
const directorRouter = require("../router/director.router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is an api');
});

app.use(express.json())
app.use("/api/v1", movieRouter);
app.use("/api/v1", directorRouter);

module.exports = app;