import express from 'express';
import OrderDetails from '../models/orderDetailsModel';

const router = express.Router();

router.get("/:id", async (req, res) => {
    const orderDetails = await OrderDetails.find({
        userID: req.params.id
    });
    if (orderDetails) {
        res.send(orderDetails);
    } else {
        res.status(404).send({ message: "User cart not found!" })
    }
});

router.post("/", async (req, res) => {
    const orderDetails = await OrderDetails.findOne(
        {
            prdID: req.body.prdID,
            userID: req.body.userID
        }
    );

    if (!orderDetails) {
        const order = new OrderDetails({
            prdID: req.body.prdID,
            userID: req.body.userID,
            prdImage: req.body.prdImage,
            prdName: req.body.prdName,
            qty: req.body.qty,
            price: req.body.price,
            priceTotal: req.body.priceTotal
        });
        const newOrderDetails = await order.save();
        if (newOrderDetails) {
            res.send("Post completed!")
        } else {
            res.status(401).send("Post failed!")
        }
    } else {
        orderDetails.qty += req.body.qty;
        orderDetails.priceTotal += req.body.qty * orderDetails.price;
        await orderDetails.save();
    }
});

router.put("/", async (req, res) => {
    const orderDetails = await OrderDetails.findById(req.body.id);

    if (orderDetails) {
        orderDetails.qty = req.body.qty;
        orderDetails.priceTotal = req.body.qty * orderDetails.price;

        const updateOrderDetails = await orderDetails.save();
        if (updateOrderDetails) {
            res.send(updateOrderDetails);
        } else {
            res.status(404).send({ message: "Hmm!" })
        }
    }
});

router.delete("/:id", async (req, res) => {
    const deletedOrderDetails = await OrderDetails.findById(req.params.id);
    console.log(deletedOrderDetails);
    if (deletedOrderDetails) {
        await deletedOrderDetails.remove();
        res.send({ data: deletedOrderDetails._id,message: 'Product Deleted' });
    } else {
        res.send('Error in Deletion.');
    }
});

export default router;