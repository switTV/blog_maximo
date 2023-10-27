const express = require('express')
const postService = require("../services/postService")

const router = express.Router()
const service = new postService()


router.get('/', (req, res) => {
    const posts = service.find()
    res.json(posts)
})


router.get("/tags", (req, res) => {
    const { tag } = req.query;

    const postsByTag = service.findByTag(tag)
    res.json(postsByTag)
});


router.get("/:id", (req, res) => {
    const { id } = req.params;
    const post = service.findOne(id)

    res.json(post)
});


router.post("/", (req, res) => {
    const body = req.body

    let createdPost = service.create(body)
    res.json(createdPost)
})


router.patch("/:id", (req, res) => {
    const { id } = req.params
    const body = req.body

    let editedPost = service.update(id, body)
    res.json(editedPost)

})


router.delete("/:id", (req, res) => {
    const { id } = req.params

    const deletedPost = service.delete(id)
    res.json(deletedPost)
})

module.exports = router
