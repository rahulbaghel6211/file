const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-fileuplods?retryWrites=true&w=majority"
  );
};
