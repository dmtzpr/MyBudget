import mongoose, { Schema } from 'mongoose';

const ExpenseCategorySchema = new Schema(
    {
        userId: {
            type: String,
            required: 'User id is required',
        },
        name: {
            type: String,
            required: 'Category name is required',
            trim: true,
        },
        subcategories: [
            {
                name: {
                    type: String,
                    required: 'Subcategory name is required',
                },
            },
        ],
    },
    { toJSON: { virtuals: true } }
);

ExpenseCategorySchema.statics.createFields = ['name', 'subcategories'];
ExpenseCategorySchema.statics.createSubcategoryFields = ['name'];

export default mongoose.model('expenseCategory', ExpenseCategorySchema);
