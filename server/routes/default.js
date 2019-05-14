const express = require("express");
const path = require('path');
const publicPath = path.join(__dirname, '../..', 'public');;

const router = express.Router();

router.get("/", (__request, __response) => {
	__response.sendFile(path.join(publicPath, 'index.html'));
});
module.exports = router;
