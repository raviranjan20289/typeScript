"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ success: true, todo: newTodo, todos: todos });
});
router.put('/editTodo/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todoItem) => {
        return todoItem.id === id;
    });
    if (todoIndex >= 0) {
        todos[todoIndex].text = req.body.text;
        return res.status(200).json({ success: true, todos: todos });
    }
    else
        res.status(404).json({ success: false, message: "item not found", todos: todos });
});
router.delete('/deleteTodo/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todoItem) => {
        return todoItem.id === id;
    });
    if (todoIndex >= 0) {
        todos = todos.filter(todoItem => {
            return todoItem.id !== id;
        });
        res.status(200).json({ success: true, todos: todos });
    }
    else {
        return res.status(404).json({ success: false, message: "item not found", todos: todos });
    }
});
exports.default = router;