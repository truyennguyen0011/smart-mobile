import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        reviewerName: { type: String, required: true },
        rating: { type: Number, default: 5 },
        comment: { type: String, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true }
    }
);

const specificationSchema = new mongoose.Schema({
    screen: { type: String, required: true },
    cardScreen: { type: String, required: false },
    cpu: { type: String, required: true },
    gpu: { type: String, required: false },
    ram: { type: String, required: true },
    rom: { type: String, required: true },
    operatingSys: { type: String, required: true },
    origin: { type: String, required: true },
    mfg: { type: String, required: true },
    camFront: { type: String, required: false },
    camRear: { type: String, required: false },
    sim: { type: String, required: false },
    battery: { type: String, required: false }
});

const productSchema = new mongoose.Schema({
    prdName: { type: String, required: true, unique: true, dropDups: true },
    categoryID: { type: String, required: true },
    prdImage: { type: String, required: false },
    prdBrand: { type: String, required: true },
    pricePromotion: { type: Number, required: false, default: 0 },
    priceNormal: { type: Number, required: true, default: 0 },
    categoryName: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0, required: false },
    numReviews: { type: Number, default: 0, required: false },
    prdCreatedAt: { type: Date, required: true },
    prdUpdatedAt: { type: Date, required: true },
    specifications: specificationSchema,
    reviews: [reviewSchema]
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;