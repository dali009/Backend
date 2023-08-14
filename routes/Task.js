const express = require('express')
const router = express.Router()
const taskController = require('../controllers/Task')
const { verifiyToken } = require('../middleware/verify')

router.post('/create',verifiyToken,taskController.createTask)
router.put('/:id',verifiyToken,taskController.updateTask)
router.get('/:id',verifiyToken,taskController.getTask)
router.get('/tasks',verifiyToken,taskController.getAllTasks)
router.delete('/:id',verifiyToken,taskController.deleteTask)

module.exports = router