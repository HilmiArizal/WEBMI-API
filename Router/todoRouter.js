const express = require('express');
const { todoContoller } = require('../Controller');
const router = express.Router();

router.post('/addTodo', todoContoller.addTodo);
router.patch('/editTodo', todoContoller.editTodo);
router.delete('/deleteTodo', todoContoller.deleteTodo);
router.get('/getAllTodo', todoContoller.getAllTodo);

module.exports = router;