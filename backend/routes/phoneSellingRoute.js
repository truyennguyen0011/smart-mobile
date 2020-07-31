import express from 'express';
import PhoneSelling from '../models/phoneSellingModel';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const phone = await PhoneSelling.find({});
    res.send(phone)
});

export default router;