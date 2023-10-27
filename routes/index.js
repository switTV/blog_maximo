const express = require('express')
const postsRouter = require("./postsRouter")
const searchRouter = require("./searchRouter")

function routerAPI(app) {
    app.use("/api/v1/posts", postsRouter)
    app.use("/api/v1/search", searchRouter)
}

module.exports = routerAPI
