import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    bannerLink: { type: String, required: true },
    bannerUrlImg: { type: String, required: true, unique: true, dropDups: true },
    bannerImgAlt: { type: String, required: true },
    bannerImgTitle: { type: String, required: true },
});

const bannerModel = mongoose.model("bestSellingBanner", bannerSchema);

export default bannerModel;