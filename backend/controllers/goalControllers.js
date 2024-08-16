const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

//get goal 
//get/api/goals/
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//set goal 
//post/api/goals/
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const goals = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goals)
})

//update goal 
//update/api/goals/:id
const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
        req.body, {
            new: true,
        }
    )

    res.status(200).json(updatedGoal)
})

//delete get goal 
//delete/api/goals/:id
const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const updatedDelete = await Goal.deleteOne()

    res.status(200).json(updatedDelete)
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}