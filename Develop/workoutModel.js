const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  exercises:[{
    name: {
      type: String,
      unique: true, 
      trim: true,
      required: "Name of Workout is Required"
    },

    distance: {
      type: Number,
      trim: true
    },

    duration: {
      type: Number,
      trim: true
    },
  
    weight: {
      type: String,
      trim: true,
      required: "Weight is Required",
    },

    sets: {
        type: Number
    },

    reps: {
        type: Number
    },
  }],
  
  day: {
    type: Date,
    default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 