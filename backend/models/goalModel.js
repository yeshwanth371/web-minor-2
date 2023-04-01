const mongoose = require('mongoose');  // Import mongoose
const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text field'],
    }
}, {timestamps: true});

module.exports = mongoose.model('Goal', goalSchema);