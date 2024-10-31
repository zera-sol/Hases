const express = require("express")
const router = express.Router();
const studentModel = require("../models/student.model")
const { addStudent, loginStudent, getMe} = require("../controllers/student-ctrl")
const authenticate = require("../middleware/authenticate.middleware")

router.post("/register", addStudent)
router.post("/login", loginStudent)
router.get("/me", authenticate, getMe)

module.exports = router;