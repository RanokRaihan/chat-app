// extarnal imports
const express = require("express");

// Internal imports
const { getInbox } = require("../controller/inboxController");
const router = express.Router();
const decorateHtml = require("../middleWares/common/decorateHtml");

// inbox page
router.get("/", decorateHtml("inbox"), getInbox);

//exports
module.exports = router;
