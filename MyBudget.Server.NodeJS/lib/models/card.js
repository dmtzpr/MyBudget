var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Card = new Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        min: 0,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Card', Card);
