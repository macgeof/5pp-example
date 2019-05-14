const express = require("express");
const processJSON = require('../util/utils');

const router = express.Router();

router.post("/", (__request, __response) => {
	__response.send(processJSON(__request.body));
});

module.exports = router;