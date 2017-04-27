var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Budget = new Schema({
    monthBudget: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    description: {type: String},
    modified: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Budget', Budget);