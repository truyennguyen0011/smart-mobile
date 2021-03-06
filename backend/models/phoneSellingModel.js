import mongoose from 'mongoose';

const phoneSellingSchema = new mongoose.Schema({
        _id : {type: String, required: true},
        prdName : { type: String, required: true },
        prdTitle : { type: String, required: true },
        prdLink : { type: String, required: true },
        prdImage : { type: String, required: true },
        pricePromotion : { type: String, required: true },
        priceNormal : { type: String, required: true },
        categoryName : { type: String, required: true },
        prdCreatedAt : { type: Date, required: true },
        prdUpdatedAt : { type: Date, required: true },
});

const phoneSellingModel = mongoose.model("bestSellingPhone", phoneSellingSchema);

export default phoneSellingModel;