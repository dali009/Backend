const express = require('express')
const router = express.Router()
const taskController = require('../controllers/Task')

router.post('/create',taskController.createTask)
router.put('/:id',taskController.updateTask)
router.get('/:id',taskController.getTask)
router.get('/tasks',taskController.getAllTasks)
router.delete('/:id',taskController.deleteTask)

module.exports = router