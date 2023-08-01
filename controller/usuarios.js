const { response } = require("express");

const usuariosGet = (req, res = response) => {

    const {q,nombre = "no name",apikey, pages = 1, limit} = req.query

    res.json({
        msg : "Get API - Controller",
        q,
        nombre,
        apikey,
        pages,
        limit
    })
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg : "Put API - Controller",
        id
    })
};

const usuariosPost = (req, res = response) => {

    const {nombre , edad} = req.body;

    res.json({
        msg : "Post API - Controller",
        nombre,
        edad
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg : "Delete API - Controller"
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg : "Patch API - Controller"
    })
};



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};