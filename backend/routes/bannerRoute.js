import express from 'express';
import Banner from '../models/bannerModel';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const banner = await Banner.find({});
    res.send(banner)
});

export default router;