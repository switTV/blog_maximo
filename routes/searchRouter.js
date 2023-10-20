const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
    const { q } = req.query

    if(q) {
        const searchedPosts = posts.title.includes(q)
        res.json(searchedPosts)
    }
    else {
        res.send("no buscaste nada")
    }
})

module.exports = router
