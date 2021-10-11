const {Router} = require('express')
const {studentController} = require('../controllers/student.controller')

const router = Router()

router.get('/students', studentController.getStudent)
router.post('/students', studentController.postStudent)