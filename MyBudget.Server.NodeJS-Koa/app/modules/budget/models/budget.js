import mongoose, { Schema } from 'mongoose';

const BudgetSchema = new Schema({
    userId: {
        type: String,
        required: 'User id is required',
        select: false,
    },
    monthBudget: {
        type: Number,
        required: 'Budget is required',
        min: [0, 'Incorrect value'],
        default: 0,
    },
});

BudgetSchema.statics.createFields = ['monthBudget'];

export default mongoose.model('budget', BudgetSchema);
