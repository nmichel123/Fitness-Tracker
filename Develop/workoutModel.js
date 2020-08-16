const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioWorkout = new Schema ({
    
    name: {
        type: String,
        unique: true, 
        trim: true,
        required: "Name of Workout is Required"
      },

    duration: {
        type: Number,
        trim: true
    },

    distance: {
        type: Number,
        trim: true
    },
})

const ResistanceWorkout = new Schema({
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

    workoutCreated: {
      type: Date,
      default: Date.now
    }
  });

const Cardio = mongoose.model("Cardio", CardioWorkout);
const Resistance = mongoose.model("Resistance", ResistanceWorkout);

module.exports = Cardio; 
module.exports = Resistance;