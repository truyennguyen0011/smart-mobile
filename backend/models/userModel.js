import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true, },
    phone: { type: String, required: true },
    gender: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;