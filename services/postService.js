const boom = require("@hapi/boom")

class PostService {
    constructor() {
        this.posts = [] // manejando los post en memoria (luego lo cambiaremos a una base de datos)
    }

    async create(body) {
        // constantes
        const generatedId = this.posts.length + 1
        const newProduct = {
            id: generatedId,
            ...body
        }

        // aplicamiento y retorno
        this.posts.push(newProduct)
        return newProduct
    }

    async find() {
        // retorno
        return this.posts
    }

    async findOne(id) {
        // constante
        const searchedPost = this.posts.find((post) => post.id == id); // busca un post con el id indicado

        // condicional "handle error"
        if (!searchedPost) {
            throw boom.notFound('post not found')
        }

        // retorno
        return searchedPost
    }

    async findByTag(tag) {
        // constante
        const filteredPostsByTag = this.posts.filter((post) => post.tags.includes(tag)); // filtra todos los post con el tag indicado

        // condicional "handle error"
        if (!filteredPostsByTag) {
            throw boom.notFound('Post not found')
        }

        // retorno
        return filteredPostsByTag
    }

    async update(id, changes) {
        // constante
        const index = this.posts.findIndex((post) => post.id == id)
        const post = this.posts[index]

        // condicional "handle error"
        if(index === -1) {
            throw boom.notFound('Post not found')
        }

        // aplicando los cambios y retornando
        this.posts = {
            ...post,
            ...changes
        };

        return this.posts[index]
    }

    async delete(id) {
        // constantes
        const index = this.posts.findIndex((post) => post.id == id) // busca el indice del id proporcionado

        // condicional "handle error"
        if(index === -1) {
            throw boom.notFound("Post not found")
        }

        // aplicando y retornando
        this.posts.splice(index, 1)
        return {message: "deleted"}

    }

}

module.exports = PostService;
