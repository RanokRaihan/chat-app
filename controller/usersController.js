// get users page
const getUsers = (req, res, next) => {
    res.render("users");
};

// exports
module.exports = {
    getUsers,
};
