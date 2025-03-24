const express = require('express');
const tasksController = require('./controllers/tasksController');
const authMiddleware = require('./middleware/authMiddleware');
const router = express.Router();

// Protected routes (require authentication)
router.post('/', authMiddleware, tasksController.createTask);
router.get('/', authMiddleware, tasksController.getTasks);
router.get('/:id', authMiddleware, tasksController.getTask);
router.put('/:id', authMiddleware, tasksController.updateTask);
router.delete('/:id', authMiddleware, tasksController.deleteTask);

module.exports = router;