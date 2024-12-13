const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://gvrinternet1:DX8yBLSyQoC9x5Zq@cluster1.za4uq.mongodb.net/Library';

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to ${MONGO_URI}`);
  })
  .catch((err) => {
    console.error("Error occurred during connection: " + err);
  });

const db = mongoose.connection;
db.on('error', (err) => {
  console.log("Error occurred during connection: " + err);
});

module.exports = mongoose;