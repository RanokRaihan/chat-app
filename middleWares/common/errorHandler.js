const createError = require("http-errors");

// not found error handler
const notFoundHandler = (req, res, next) => {
    next(createError(404, "your requested content was not found!"));
};

// default error handler
const errorHandler = (err, req, res, next) => {
    res.locals.error =
        process.env.NODE_ENV.trim() === "development"
            ? err
            : { message: err.message };
    res.status(err.status || 500);
    // html or json response
    if (res.locals.html) {
        //html response
        res.render("error", {
            title: "Error page",
        });
    } else {
        // json response
        res.json(res.locals.error);
    }
};

// export
module.exports = {
    notFoundHandler,
    errorHandler,
};
