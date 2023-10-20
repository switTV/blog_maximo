# blog_maximo
## dia: 16/10/23, hora: 01:10am
agregando express y añadiendo buenas practicas para poder tener un proyecto mantenible en el tiempo :) <br>
me voy a dormir.

## dia: 16/10/23, hora: 13:49pm
Creando mi primer servidor con express en el cual se lee "hola carola" <br>
sigan viendo.

## dia: 16/10/23, hora: 10:28pm
creando distintas ramas en mi archivo index.js en el backend

## dia: 17/10/23, hora 18:37pm
agregue este endpoint:
```javascript
app.get("/posts/:id/", (req, res) => {
    const { id } = req.params

    const searchedPost = posts.find((post) => post.id == id)

    if (searchedPost === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post');
    }
    else {
        res.send(searchedPost);
    }
})
```
y hice posts una variable global

## dia 17/10/23, hora 21:33pm
agregue otro endpoint mas para buscar por los tags:
```javascript
app.get("/posts/tags/:tag", (req, res) => {
    const { tag } = req.params;
    const filteredPostsByTag = posts.filter((post) => post.tags.includes(tag));

    if(filteredPostsByTag === undefined) {
        res.status(404).send('Err 404: Se produjo un error al buscar el post con la etiqueta indicada');
    }
    else {
        res.send(filteredPostsByTag);
    }
});
```

## dia 19/10/23, hora: 12:12pm
cambie el endpoint para buscar por tags a un query parameter
``` javascript
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
```

## dia 19/10/23, hora: 22:42pm
agregue un sistema rutas con express.Router creando una carpeta llamada routes
donde por ahora estan los archivos: "index.js", "postRouter.js", "searchRouter.js"

### index.js
``` javascript
const postsRouter = require("./postsRouter")
const searchRouter = require("./searchRouter")

function routerAPI(app) {
    app.use("/posts", postsRouter)
    app.use("/search", searchRouter)
}

module.exports = routerAPI

```

y use la variable en **backend/index.js** agregando estas 2 lineas de codigo
``` javascript
const routerApi = require('../routes/index')
routerApi(app)
```

