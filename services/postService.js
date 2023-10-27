class PostService {
    constructor() {
        this.posts = [] // manejando los post en memoria (luego lo cambiaremos a una base de datos)
    }

    create(body) {
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

    find() {
        // retorno
        return this.posts
    }

    findOne(id) {
        // constante
        const searchedPost = this.posts.find((post) => post.id == id); // busca un post con el id indicado

        // retorno
        return searchedPost
    }

    findByTag(tag) {
        // constante
        const filteredPostsByTag = this.posts.filter((post) => post.tags.includes(tag)); // filtra todos los post con el tag indicado

        // retorno
        return filteredPostsByTag
    }

    update(id, changes) {
        // constante
        const index = this.posts.findIndex((post) => post.id == id)
        const post = this.posts[index]

        // condicional "handle error"
        if(index === -1) {
            throw new Error("id not found")
        }

        // aplicando los cambios y retornando
        this.posts = {
            ...post,
            ...changes
        };

        return this.posts[index]
    }

    delete(id) {
        // constantes
        const index = this.posts.findIndex((post) => post.id == id) // busca el indice del id proporcionado

        // condicional "handle error"
        if(index === -1) {
            throw console.error("El id proporcionado no ha sido encontrado");
        }

        // aplicando y retornando
        this.posts.splice(index, 1)
        return {message: "deleted"}

    }

}

module.exports = PostService;
