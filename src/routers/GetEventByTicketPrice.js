const express = require("express");
const priceRouter = express.Router();
const { Events } = require("../models/Events");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

priceRouter.route("/:ticketPrice").get((req, res) => {
  const ticketPrice = req.params.ticketPrice;
  const event = Events.findAll({
    where: {
      ticketPrice: {
        [Op.lte]: ticketPrice
      }
    },
    order: [["createdAt", "DESC"]]
  })
    .then(response => {
      res.status(200).json({ Event: response });
    })
    .catch(error =>
      res
        .status(400)
        .json({ error: "Event not found! Please enter valid ticket price" })
    );
});

module.exports = priceRouter;
