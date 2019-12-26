const express = require("express");
const searchRouter = express.Router();
const { Events } = require("../models/Events");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

searchRouter.route("/").post((req, res) => {
  const searchEvent = req.body.searchKeyword;
  const event = Events.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.iLike]: "%" + searchEvent + "%" } },
        { category: { [Op.iLike]: "%" + searchEvent + "%" } },
        { organiser: { [Op.iLike]: "%" + searchEvent + "%" } },
        { location: { [Op.iLike]: "%" + searchEvent + "%" } }
        // { timings: { [Op.iLike]: "%" + searchEvent + "%" } },
        // { ticketPrice: { [Op.iLike]: "%" + searchEvent + "%" } },
        // { pinCode: { [Op.iLike]: "%" + searchEvent + "%" } }
      ]
    }
  })
    .then(response => {
      res.status(200).json({ Event: response });
    })
    .catch(error =>
      res
        .status(400)
        .json({ error: "Event not found for the keyword: " + searchEvent })
    );
});

module.exports = searchRouter;
