const errorHandler = (err, req, res, next) => { //err, req, res, next sıralaması önemli
    console.log();
    res.status(500).send(err.errorMessage)
}
module.exports = errorHandler;