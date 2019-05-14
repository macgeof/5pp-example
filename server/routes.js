const express = require("express");
const path = require('path');
const indexRoutes = require("./routes/default");
const jsonRoutes = require("./routes/jsonRoutes");
const publicPath = path.join(__dirname, '..', 'public');
module.exports = function(app) {
  app.use(express.json());
	app.use(express.static(publicPath));
  app.use("/*", indexRoutes);
  app.use("/jsontransform", jsonRoutes);
};