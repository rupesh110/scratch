const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.message === 'CastError' && err.name === 'ObjectId') {
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {errorHandler};