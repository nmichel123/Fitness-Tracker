const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const router = require("express").router(); 


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

app.post("/api/workouts", ({ body }, res) => {
    Cardio.create(body)
      .then(cardio => {
        res.json(cardio);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.post("/api/workouts", ({ body }, res) => {
    Resistance.create(body)
      .then(resistance => {
        res.json(resistance);
      })
      .catch(err => {
        res.json(err);
      });
  });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });