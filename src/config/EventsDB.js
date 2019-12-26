require("dotenv").config();
const Sequelize = require("sequelize");
/**
 * setting the connection to the database.
 * Here postgresql is used.
 */
const EventsDB = new Sequelize(process.env.DB_URL);

//Testing the connection establishment with DB
EventsDB.authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully with the events database."
    );
  })
  .catch(err => {
    console.error("Unable to connect to the events database:", err);
  });

module.exports = EventsDB;
