//get goal 
//get/api/goals/
const getGoals = (req, res) => {
    res.status(200).json({message: "get goals"})
}

//set goal 
//post/api/goals/
const setGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
}

//update goal 
//update/api/goals/:id
const updateGoals = (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}

//delete get goal 
//delete/api/goals/:id
const deleteGoals =(req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}