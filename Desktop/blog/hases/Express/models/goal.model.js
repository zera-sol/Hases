const mongoose = require("mongoose");

const goalSchema  = mongoose.Schema({
   student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
   }, 
   goal: {
    type: String,
    required: [true, "Goal is required"]
   }
}, {timestamp: true})

const goalModel = mongoose.model("User", goalSchema);

module.exports = goalModel;