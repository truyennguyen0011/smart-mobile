import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  prdID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  userID: { type: String, required: true },
  prdImage: { type: String, required: true },
  prdName: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: String, required: true },
  priceTotal: { type: Number, required: true, default: 0 }
});

const orderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  address: { type: String, required: true },
  payment: { type: String, required: true },
  itemsPrice: { type: Number },
  priceShipping: { type: Number },
  priceTotal: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date }
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;