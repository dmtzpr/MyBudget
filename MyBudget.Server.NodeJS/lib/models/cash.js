var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cash = new Schema({
    amount: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    note: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Cash', Cash);
