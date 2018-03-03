import mongoose, { Schema } from 'mongoose';

const CashSchema = new Schema({
    userId: {
        type: String,
        required: 'User id is required',
        select: false,
    },
    amount: {
        type: Number,
        required: true,
        min: [0, 'Incorrect value'],
        default: 0,
    },
    note: { type: String },
    date: { type: Date, default: Date.now },
});

CashSchema.statics.createFields = ['amount', 'note', 'date'];

export default mongoose.model('cash', CashSchema);
