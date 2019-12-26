const { EventSync } = require("../models/Events");

// Synchronization of model with database
EventSync({ force: true });
