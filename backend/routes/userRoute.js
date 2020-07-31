import express from 'express';
import User from '../models/userModel';
import { getToken, requestAuth } from '../util';
import md5 from 'md5';

const router = express.Router();

router.post('/login', async (req, res) => {
    const hashedPassword = md5(req.body.password);
    const loginUser = await User.findOne({
        email: req.body.email,
        password: hashedPassword
    });
    if (loginUser) {
        res.send({
            _id: loginUser._id,
            fullName: loginUser.fullname,
            email: loginUser.email,
            isAdmin: loginUser.isAdmin,
            token: getToken(loginUser)
        });
    } else {
        res.status(401).send({ msg: 'Invalid Email or Password' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = md5(req.body.password);

        const user = new User({
            password: hashedPassword,
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
        });
        const newUser = await user.save();
        if (newUser) {
            res.send(newUser);
        }
    } catch (error) {
        res.status(401).send({ error: error, message: 'Invalid User data' });
    }
});

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            password: '123456',
            fullName: 'Admin 1',
            email: 'admin@admin.com',
            phone: '011',
            gender: 1,
            dateOfBirth: '1999/01/01',
            isAdmin: true
        });

        const newUser = await user.save();

        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message })
    }
});

export default router;