const router = require("express").Router(); 

const Cardio = require("../workoutModel");
const Resistance = require("../workoutModel");


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

router.put("/api/workouts/:id", (req, res) => {
    // Remember: when searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))
  });

router.get("/api/workouts", (req, res) => {
    Cardio.find({})
      .sort({ date: -1 })
      .then(dbCardio => {
        res.json(dbCardio);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
    Resistance.find({})
      .sort({ date: -1 })
      .then(dbResistance => {
        res.json(dbResistance);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router; 