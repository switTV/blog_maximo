const express = require('express')
const routerApi = require('../routes/index')
const app = express()

const port = 1337

routerApi(app)

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

app.listen(port, () => {
    console.log(port)
})

