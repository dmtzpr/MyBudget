import mongoose, { Schema } from 'mongoose';

const ExpenseSchema = new Schema(
    {
        userId: {
            type: String,
            required: 'User id is required',
        },
        categoryId: {
            type: String,
            required: 'Expense category id is required',
        },
        subcategoryId: {
            type: String,
            required: 'Expense subcategory id is required',
        },
        paymentTypeId: {
            type: String,
            required: 'Payment type id is required',
        },
        amount: {
            type: Number,
            required: true,
            min: [0, 'Incorrect value'],
            default: 0,
        },
        note: { type: String },
        date: { type: Date, default: Date.now },
    },
    { toJSON: { virtuals: true } }
);

ExpenseSchema.statics.createFields = ['categoryId', 'subcategoryId', 'paymentTypeId', 'amount', 'note', 'date'];

export default mongoose.model('expense', ExpenseSchema);
