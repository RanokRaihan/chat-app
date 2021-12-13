// extarnal imports
const express = require("express");

// intarnal imports
const { getLogin } = require("../controller/loginController");
const decorateHtml = require("../middleWares/common/decorateHtml");
// router
const router = express.Router();

//routes: login page
router.get("/", decorateHtml("Login"), getLogin);

// export
module.exports = router;
