const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    name: {
      type: String,
      unique: true, 
      trim: true,
      required: "Name of Workout is Required"
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

    duration: {
        type: Number,
        trim: true
    },

    distance: {
        type: Number,
        trim: true
    },

    workoutCreated: {
      type: Date,
      default: Date.now
    }

  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 