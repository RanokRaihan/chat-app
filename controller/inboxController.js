// get inbox page
const getInbox = (req, res, next) => {
    res.render("inbox");
};

// exports
module.exports = {
    getInbox,
};
