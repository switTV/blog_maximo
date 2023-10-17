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
