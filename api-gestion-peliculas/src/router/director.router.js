const router = require("express").Router();
const {faker} = require("@faker-js/faker")

const Directors = require("../model/director.model");
const { request } = require("../app/app");


router.get("/directors", async (req, res) =>{
    const directors = await Directors.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: directors
    });
});

router.get("/directors/:director_id", async (req, res) =>{
    const id = req.params.director_id;
    const director = await Directors.findOne({
        where: {
            director_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: director,
    });
});

router.post("/directors", async (req, res) =>{
    const dataDirectors = req.body
    await Directors.sync();
    const createDirector = await Directors.create({
        director_name: dataDirectors.director_name,
        director_surname: dataDirectors.director_surname,
    });
    res.status(201).json({
        ok: true,
        status: 201,
        message: "Created Director",
    });
});

router.put("/directors/:director_id", async (req, res) =>{
    const id= req.params.director_id;
    const dataDirectors = req.body;
    const updateDirector = await Directors.update({
        director_name: dataDirectors.director_name,
        director_surname: dataDirectors.director_surname,
    },{
        where: {
            director_id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateDirector
    })
});

router.delete("/directors/:director_id", async(req, res) =>{
    const id = req.params.director_id
    const deleteDirector = await Directors.destroy({
        where: {
            director_id: id,
        },
    });
    res.status(204).json({
        ok: true,
        status: 204,
        body: deleteDirector,
    });
});

module.exports = router;