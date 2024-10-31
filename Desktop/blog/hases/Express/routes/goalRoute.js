const express = require("express")
const authenticate = require("../middleware/authenticate.middleware")

const router = express.Router();

const { findGoals, addGoal, updateGoal, deleteGoal, findAllGoals} = require("../controllers/goal-ctrl")

router.get("/", authenticate, findGoals)
router.post("/add", authenticate, addGoal)
router.put("/update/:id", authenticate, updateGoal)
router.delete("/delete/:id", authenticate, deleteGoal)
router.get("/all", findAllGoals)

module.exports = router;