import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true, dropDups: true, },
    phone: { type: String, required: true },
    avatar: { type: String, required: false }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;