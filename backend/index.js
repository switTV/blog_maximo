const express = require('express')
const routerApi = require('../routes/index')

const { logErrors, errorHandle, boomErrorHandler } = require('../middlewares/errorHandler')

const app = express()
const port = 1337

app.use(express.json())
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandle)

routerApi(app)


app.get('/', (req, res) => {
    res.send('Dirigete a /api/v1/posts') //cambie el "hola carola"
})

app.listen(port, () => {
    console.log(port)
})

