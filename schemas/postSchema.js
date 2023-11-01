const Joi = require('joi')

const id = Joi.number()
const title_post = Joi.string().alphanum().min(3).max(50)
const min_description = Joi.string().alphanum().min(20).max(80)
const tags = Joi.string()
const isLiked = Joi.boolean()

const createPostSchema = Joi.object({
    title_post: title_post.required(),
    min_description: min_description.required(),
    tags: tags,
    isLiked: isLiked
})

const updatePostSchema = Joi.object({
    title_post: title_post,
    min_description: min_description,
    tags: tags,
})

const getPostSchema = Joi.object({
    id: id.required()
})

const getPostByTagSchema = Joi.object({
    tags: tags.required()
})

module.exports = { createPostSchema, getPostSchema, updatePostSchema, getPostByTagSchema }
