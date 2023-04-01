const asyncHandler = require('express-async-handler');

//@desc Get all goals
//@route GET /goals

const { object } = require("webidl-conversions");

//@access Private
const getGoals = asyncHandler(async(req, res) => {
    

    res.status(200).json({ message: 'Get Goals' });
});

//@desc Set all goals
//@route POST /goals
//@access Private
const setGoals = asyncHandler(async(req, res) => {
    if(! req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'Set Goals' });
});

//@desc Update all goals
//@route PUT /goals/id
//@access Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

//@desc Delete all goals
//@route DELETE /goals/id
//@access Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
};