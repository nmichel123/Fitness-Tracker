const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const router = require("express").Router(); 


const PORT = process.env.PORT || 3000;

const Cardio = require("./workoutModel");
const Resistance = require("./workoutModel");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });

router.post("/api/workouts", ({ body }, res) => {
    Cardio.create(body)
      .then(dbCardio => {
        res.json(dbCardio);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
    Resistance.create(body)
      .then(dbResistance => {
        res.json(dbResistance);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });