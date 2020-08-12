import mongoose from 'mongoose';

const orderDetailsSchema = new mongoose.Schema({
    prdID: { type: String, required: true },
    userID: { type: String, required: true },
    prdImage: { type: String, required: true },
    prdName: { type: String, required: true },
    qty: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true, default: 0 },
    priceTotal: { type: Number, required: true, default: 0 }
});

const orderDetailsModel = mongoose.model("OrderDetails", orderDetailsSchema);

export default orderDetailsModel;