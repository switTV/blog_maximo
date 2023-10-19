const express = require('express')
const app = express()
const port = 1337

posts = [
    {
        "id": 1,
        "title_post": "HTML es un lenguaje de programación?",
        "min_description": "En este post investigaremos si html podria llegar a ser considerado un lenguaje de programacion",
        "tags": ["tecnologia", "futuro", "html", "web", "2023"],
        "isLiked": false,

    },
    {
        "id": 2,
        "title_post": "HTML es un lenguaje de progdasasdaramación?",
        "min_description": "En este post investasdasdasdasigaremos si html podria llegar a ser considerado un lenguaje de programacion",
        "tags": ["tecnologia", "futadasdasduro"],
        "isLiked": false,

    },
]

app.get('/', (req, res) => {
    res.send('Dirigete a /posts') //cambie el "hola carola"
})

app.get('/posts', (req, res) => {
    res.json(posts) //agregue mas info a los posts, lo hice un array y lo hice una variable publica
})

app.get("/posts/tags", (req, res) => {
    const { tag } = req.query;
    const filteredPostsByTag = posts.filter((post) => post.tags.includes(tag));


    if(filteredPostsByTag === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post con la etiqueta indicada');
    }
    else {
        res.send(filteredPostsByTag);
    }

});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const searchedPost = posts.find((post) => post.id == id);

    if (searchedPost === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post');
    }
    else {
        res.send(searchedPost);
    }
});

// app.get("/search", (req, res) => {
//     const { q } = req.query

//     if(q) {
//         const searchedPosts = posts.title.includes(q)
//         res.json(searchedPosts)
//     }
//     else {
//         res.send("no buscaste nada")
//     }
// })

// app.listen(port, () => {
//     console.log(port)
// })

