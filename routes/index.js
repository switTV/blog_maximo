const postsRouter = require("./postsRouter")
const searchRouter = require("./searchRouter")

function routerAPI(app) {
    app.use("/posts", postsRouter)
    app.use("/search", searchRouter)
}

module.exports = routerAPI
