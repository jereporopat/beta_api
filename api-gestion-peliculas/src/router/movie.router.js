const router = require("express").Router();
const {faker} = require("@faker-js/faker")

const Movies = require("../model/movie.model");
const { request } = require("../app/app");


router.get("/movies", async (req, res) =>{
    const movies = await Movies.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: movies
    });
});

router.get("/movies/:movie_id", async (req, res) =>{
    const id = req.params.movie_id;
    const movie = await Movies.findOne({
        where: {
            movie_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: movie,
    });
});

router.post("/movies", async (req, res) =>{
    const dataMovies = req.body
    await Movies.sync()
    const createMovie = await Movies.create({
        movie_name: dataMovies.movie_name,
        movie_genre: dataMovies.movie_genre,
        status: dataMovies.status,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Movie",
    });
});

router.put("/movies/:movie_id", async (req, res) =>{
    const id= req.params.movie_id;
    const dataMovies = req.body;
    const updateMovie = await Movies.update({
        movie_name: dataMovies.movie_name,
        movie_genre: dataMovies.movie_genre,
        status: dataMovies.status,
    },{
        where: {
            movie_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateMovie
    })
});

router.delete("/movies/:movie_id", async(req, res) =>{
    const id = req.params.movie_id
    const deleteMovie = await Movies.destroy({
        where: {
            movie_id: id,
        },
    });
    res.status(204).json({
        ok: true,
        status: 204,
        body: deleteMovie,
    });
});

module.exports = router;