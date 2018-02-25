import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.plugin(uniqueValidator);

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: 'User with username "{VALUE}" already exist',
            lowercase: true,
            required: 'username is required',
            trim: true,
        },
        password: {
            type: String,
            required: 'Password is required',
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.statics.createFields = ['username', 'password'];

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = bcrypt.genSaltSync(10);

    this.password = bcrypt.hashSync(this.password, salt);

    next();
});

UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('user', UserSchema);
