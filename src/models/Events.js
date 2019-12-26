/*
  Importing required packages
*/
const Sequelize = require("sequelize");
const EventsDB = require("../config/EventsDB");

/*
  modeling the schema/table for phone book model.
*/
const Events = EventsDB.define("tbl_event", {
  title: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  category: Sequelize.STRING,
  organiser: Sequelize.STRING,
  location: Sequelize.STRING,
  timings: Sequelize.DATE,
  ticketPrice: Sequelize.INTEGER,
  pinCode: Sequelize.INTEGER
});

/**
 * Dummy records
 */
const arr = [
  {
    title: "Resolution 2020 @ BRAZA - With DJ ANTO & DJ JOSHUA",
    category: "New Year Parties",
    organiser: "Ashwanth Saravanan",
    location: "Chennai",
    timings: "2019-12-31 19:30:00",
    ticketPrice: 4999,
    pinCode: 600029
  },
  {
    title: "Happy Ending 2019 - 2020 NYE",
    category: "New Year Parties",
    organiser: "Chiroptera",
    location: "Le Royal Mridien, Chennai",
    timings: "2019-12-31 19:00:00",
    ticketPrice: 2500,
    pinCode: 600030
  },
  {
    title: "Learn IoT and Python with RaspberryPi ",
    category: "Event Management Workshop",
    organiser: "Sudhakar Parthasarathy",
    location: "Alliance Franaise of Madras, Chennai",
    timings: "2020-02-02 09:30:00",
    ticketPrice: 1500,
    pinCode: 600042
  }
];

/*
  Synchronizing the model with the database
*/
const EventSync = ({ force = false } = { force: false }) => {
  Events.sync({ force })
    .then(() => {
      Events.bulkCreate(arr).then(result => {
        console.log(result);
      });
    })

    .catch(console.error);
};

exports.Events = Events;
exports.EventSync = EventSync;
