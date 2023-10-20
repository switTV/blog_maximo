const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json(posts) //agregue mas info a los posts, lo hice un array y lo hice una variable publica
})

router.get("/tags", (req, res) => {
    const { tag } = req.query;
    const filteredPostsByTag = posts.filter((post) => post.tags.includes(tag));


    if(filteredPostsByTag === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post con la etiqueta indicada');
    }
    else {
        res.send(filteredPostsByTag);
    }

});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const searchedPost = posts.find((post) => post.id == id);

    if (searchedPost === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post');
    }
    else {
        res.send(searchedPost);
    }
});

module.exports = router
