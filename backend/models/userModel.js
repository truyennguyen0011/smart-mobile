import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true, },
    phone: { type: String, required: true },
    gender: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    isAdmin: { type: Boolean, required: false, default: false }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;