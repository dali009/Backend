const Task = require('../models/Task')
exports.createTask = async(req,res,next)=>{
    try {
        const {id} = req.user
        const completionDate = new Date(req.body.date)
        const task = new Task({...req.body, userId: id, date:completionDate})
        const saveTask = await task.save()
        return res.status(201).json({task: saveTask})
    } catch (err) {
        next(err)
    }
}

exports.updateTask = async(req,res,next)=>{
    try {
        const {id} = req.params
        
    } catch (err) {
        next(err)
    }
}

exports.getTask = async(req,res,next)=>{
    try {
        
    } catch (err) {
        next(err)
    }
}

exports.getAllTasks = async(req,res,next)=>{
    try {
        
    } catch (err) {
        next(err)
    }
}

exports.deleteTask = async(req,res,next)=>{
    try {
        
    } catch (err) {
        next(err)
    }
}