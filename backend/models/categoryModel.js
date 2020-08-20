import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true, unique: true },
});

const categoryModel = mongoose.model("Categories", categorySchema);

export default categoryModel;