import express from 'express';
import LaptopSelling from '../models/laptopSellingModel';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const laptop = await LaptopSelling.find({});
    res.send(laptop)
});

export default router;