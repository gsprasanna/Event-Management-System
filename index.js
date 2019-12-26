require("dotenv").config(); // initializing the environmental variables
/*
  Importing required packages
*/
const express = require("express");
const bodyParser = require("body-parser");
const priceRouter = require("./src/routers/GetEventByTicketPrice");
const searchRouter = require("./src/routers/SearchEvents");
const pinCodeRouter = require("./src/routers/GetEventByPincode");

/**
 * Creates an instance of the express server
 */
const app = express();
app.use(bodyParser.json());

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port: ", server.address().port);
});

// configure the router
app.use("/GetEventByTicketPrice", priceRouter);
app.use("/SearchEvents", searchRouter);
app.use("/GetEventByPincode", pinCodeRouter);
