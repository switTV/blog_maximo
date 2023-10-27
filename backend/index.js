const express = require('express')
const routerApi = require('../routes/index')
const app = express()

const port = 1337

app.use(express.json())

routerApi(app)


app.get('/', (req, res) => {
    res.send('Dirigete a /api/v1/posts') //cambie el "hola carola"
})

app.listen(port, () => {
    console.log(port)
})

