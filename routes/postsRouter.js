const express = require('express')
const postService = require("../services/postService")
const validatorHandler = require("../middlewares/ValidatorHandle")
const { createPostSchema, updatePostSchema, getPostSchema, getPostByIdSchema } = require("../schemas/postSchema")

const router = express.Router()
const service = new postService()


router.get('/', async (req, res) => {
    const posts = await service.find()
    res.json(posts)
})

router.get("/:id", validatorHandler(getPostSchema, 'params'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await service.findOne(id)

        res.json(post)
    } catch (error) {
        next(error)
    }
});

router.get("/tags", validatorHandler(getPostByIdSchema, 'params'), async (req, res, next) => {
    try {
        const { tag } = req.query;

        const postsByTag = await service.findByTag(tag)
        res.json(postsByTag)

    } catch (error) {
        next(error)
    }
});




router.post("/", async (req, res) => {
    const body = req.body

    let createdPost = await service.create(body)
    res.json(createdPost)
})


router.patch("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body

        let editedPost = await service.update(id, body)
        res.json(editedPost)

    } catch (error) {
        next(error)
    }

})


router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const deletedPost = await service.delete(id)
    res.json(deletedPost)
})

module.exports = router
