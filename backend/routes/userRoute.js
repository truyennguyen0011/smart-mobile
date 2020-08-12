import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';
import md5 from 'md5';
import multer from 'multer';

const upload = multer({ dest: './public/uploads/' })
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
            fullName: loginUser.fullName,
            email: loginUser.email,
            token: getToken(loginUser)
        });
    } else {
        res.status(401).send({ msg: 'Invalid Email or Password' });
    }
});

router.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        console.log(req.files);

        const hashedPassword = md5(req.body.password);

        const user = new User({
            password: hashedPassword,
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            avatar: req.body.avatar,
        });
        const newUser = await user.save();
        if (newUser) {
            res.send(newUser);
        }
    } catch (error) {
        res.status(401).send({ error: error, message: 'Invalid User data' });
    }
});

export default router;