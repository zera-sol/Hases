require('dotenv').config();
const studentModel = require("../models/student.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET_KEY = process.env.SECRET_KEY;
// Register new students
//method POST
//path: /student/register
const addStudent = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Please enter all fields"})
    }
    const student = await studentModel.findOne({email});
    if(student){
        return res.status(400).json({message: "Student already exists"})
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new student
    const newStudent = await studentModel.create({
        name,
        email,
        password: hashedPassword
    })
    if(newStudent){
        res.json({
            message: "Student created Successfully",
            student_name: newStudent.name,
            student_email: newStudent.email,
            student_id: newStudent._id,
            token: generateToken(newStudent._id)
        })
    }else{
        res.status(500).json({message: "Failed to create student"})
    }
}

// Login 
//method POST
//path: /student/login
const loginStudent = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please enter all fields"})
    }
    const student = await studentModel.findOne({email});
    if(!student){
        return res.status(400).json({message: "Student does not exist"})
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if(!isMatch){
        return res.status(400).json({message: "Invalid Password"})
    }else{
        res.status(200).json({
            message: "Student Logged in",
            student_name: student.name,
            student_email: student.email,
            student_id: student._id,
            token: generateToken(student._id)
        })
    }
}

// find student
//method GET
//path: /student/me
const getMe = async (req, res) => {
   const {_id, name, email} = req.student;
    res.json({
         id: _id,
         name,
         email
    })
}
 
const generateToken = (id) => {
    return jwt.sign({id}, SECRET_KEY, {
        expiresIn: '30d'
    })
}

module.exports = {
    addStudent,
    loginStudent,
    getMe
}