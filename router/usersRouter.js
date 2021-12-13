// extarnal imports
const express = require("express");

// Internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtml = require("../middleWares/common/decorateHtml");

const router = express.Router();

//users page
router.get("/", decorateHtml("Users"), getUsers);

//exports
module.exports = router;
