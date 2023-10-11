module.exports.respond = (res, output, statusCode) => {
    res.set('Content-Type', 'application/json');
    res.status(statusCode).json(output);
}