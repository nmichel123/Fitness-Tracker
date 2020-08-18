const router = require("express").Router(); 

const Workout = require("../models/workoutModel");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id,
        {$push: {exercises: body} }, {new: true})
        .then(dbWorkout =>
            {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            })
  });  

module.exports = router; 