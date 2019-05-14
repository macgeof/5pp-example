const express = require("express");

const app = express();

require("./cors")(app);
require("./routes")(app);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`)    
);

module.exports = server;
