function logErrors(err, req, res, next) {
    console.error(err)
    next(err)
}

function errorHandle(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: res.stack,
    });
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom){
        const { output } = err
        res.status(output.statusCode).json(output.payload)
    }
    else{
        next(err)
    }
}

module.exports = { logErrors, errorHandle, boomErrorHandler }
