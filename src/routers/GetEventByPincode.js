const express = require("express");
const pinCodeRouter = express.Router();
const { Events } = require("../models/Events");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

pinCodeRouter.route("/:pinCode").get((req, res) => {
  const pinCode = req.params.pinCode;
  const event = Events.findAll({
    where: {
      pinCode
    },
    order: [["createdAt", "DESC"]]
  })
    .then(response => {
      res.status(200).json({ Event: response });
    })
    .catch(error =>
      res
        .status(400)
        .json({ error: "Event not found! Please enter valid pincode" })
    );
});

module.exports = pinCodeRouter;
