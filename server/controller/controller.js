const Todo = require('../models/Todo');

exports.getAll = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        if (todos.length === 0) {
            return res.status(200).json({ message: 'No Products Found' });
        }
        return res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

exports.createTodo = async (req, res, next) => {
    try {
        const newTodo = await Todo({ ...req.body });
        newTodo.save();
        return res.status(200).json(newTodo);
    } catch (error) {
        next(error);
    }
}

exports.deleteTodo = async (req, res, next) => {
    const todoId = req.params.id;

    try {
        const removedTodo = await Todo.findByIdAndDelete({ _id: todoId });
        return res.status(200).json(removedTodo)
    } catch (error) {
        next(error);
    }
}

exports.updateTodo = async (req, res, next) => {
    const todoId = req.params.id;

    try {
        let findTodo = await Todo.findById({ _id: todoId});
        findTodo.isDone = !findTodo.isDone;
        await findTodo.save();
        return res.status(200).json(findTodo);
    } catch (error) {
        next(error);
    }
}