import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true, },
    isAdmin: { type: Boolean, required: true, default: true }
});

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;