const Student = require("../models/Student.model")

module.exports.studentController = {
    getStudent: async (req, res) => {
        const students = await Student.find()
        res.json(students)
  },
  createStudents: (req, res) => {
    Student.create({
      name: "ElJo",
      phone: "899640202040",
      age: 22,
    }).then(() => {
      res.json("Student created");
    });
  },
  deleteStudentId: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json(" Student deleted");
    });
},
}