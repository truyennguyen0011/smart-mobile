import mongoose from 'mongoose';

const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: String, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  address: { type: String, required: true },
  payment: paymentSchema,
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