const router = require("express").Router(); 

const Cardio = require("./workoutModel");
const Resistance = require("./workoutModel");


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

module.exports = router; 