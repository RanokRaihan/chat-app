//get login page
const getLogin = (req, res, next) => {
    // render home page
    res.render("index");
};

// exports
module.exports = {
    getLogin,
};
