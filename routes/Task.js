const express = require('express');
const router = express.Router()
const taskController = require('../controllers/Task')
const verifiyToken = require('../middleware/verify')

router.post('/create',verifiyToken.verifyToken,taskController.createTask)
router.put('/:id',verifiyToken.verifyToken,taskController.updateTask)
router.get('/:id',verifiyToken.verifyToken,taskController.getTask)
router.get('/tasks',verifiyToken.verifyToken,taskController.getAllTasks)
router.delete('/:id',verifiyToken.verifyToken,taskController.deleteTask)

module.exports = router ; 