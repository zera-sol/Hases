const goalModel = require("../models/goal.model")
const studentModel = require("../models/student.model")

// Find all goals
const findAllGoals = async (req, res) => {
  try {
    const goals = await goalModel.find()
    res.status(200).json({
      size: goals.length,
      goals
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//find authorized student goals
const findGoals = async (req, res) => {
  try {
    const goals = await goalModel.find({student: req.student.id})
    res.status(200).json(goals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Add a goal
const addGoal = async (req, res) => {
  const goal = new goalModel({
    student: req.student.id,
    goal: req.body.goal
  })

  try {
    const newGoal = await goal.save()
    res.status(201).json(newGoal)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Update a goal

const updateGoal = async (req, res) => {
    try {
      const updatedGoal = await goalModel.findOneAndUpdate(   
        { _id: req.params.id, student: req.student.id }, 
        { goal: req.body.goal },     
        { new: true } )

        if (!updatedGoal) {
          return res.status(404).json({ message: "Goal not found" });
      }      
      res.status(200).json(updatedGoal)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

//Delete a goal
const deleteGoal = async(req, res) => {
    try {
      const deletedGoal = await goalModel.findOneAndDelete({ _id: req.params.id, student: req.student.id })
      if (!deletedGoal) {
        return res.status(404).json({ message: "Goal not found" });
      }
      res.status(200).json({ message: "Goal deleted" })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

module.exports = {
    findAllGoals,
    findGoals,
    addGoal,
    updateGoal,
    deleteGoal
}