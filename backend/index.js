const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res) => {
    res.send('Hola carola')
})

app.get('/posts', (req, res) => {
    res.json(
        {
            "title_post": "HTML es un lenguaje de programación?",
            
        }
    )
})

app.listen(port, () => {
    console.log(port)
})

