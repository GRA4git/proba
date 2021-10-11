const {Router} = require('express')
const {studentController} = require('../controllers/students.controller')

const router = Router()

router.get('/students', studentController.getStudent)
router.post('/students', studentController.createStudents)
// router.patch('/students/:id', studentController.patchStudents)
router.delete('/students/:id', studentController.deleteStudentId)

module.exports = router