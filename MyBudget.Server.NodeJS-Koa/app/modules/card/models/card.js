import mongoose, { Schema } from 'mongoose';

const CardSchema = new Schema(
    {
        userId: {
            type: String,
            required: 'User id is required',
        },
        name: {
            type: String,
            required: 'Card name is required',
            trim: true,
        },
        balance: {
            type: Number,
            min: [0, 'Incorrect value'],
            default: 0,
        },
        debitCardRecharges: [
            {
                amount: {
                    type: Number,
                    required: true,
                },
                note: { type: String },
                date: { type: Date, default: Date.now },
            },
        ],
    },
    { toJSON: { virtuals: true } }
);

CardSchema.statics.createFields = ['name', 'balance', 'debitCardRecharges'];
CardSchema.statics.rechargeFields = ['amount', 'note', 'date'];
export default mongoose.model('card', CardSchema);
