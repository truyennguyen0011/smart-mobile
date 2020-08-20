import express from 'express';
import Category from '../models/categoryModel';
import { getToken, isAuth } from '../util';
import md5 from 'md5';

const router = express.Router();

// router.put('/:id/password', isAuth, async (req, res) => {
//     const userId = req.params.id;
//     const hashedPassword = md5(req.body.password);
//     const user = await User.findById(userId);
//     if (user) {
//         if (user.password !== hashedPassword) {
//             user.password = hashedPassword || user.password;
//             const updatedUser = await user.save();
//             res.send({
//                 _id: updatedUser._id,
//                 fullName: updatedUser.fullName,
//                 email: updatedUser.email,
//                 avatar: updatedUser.avatar,
//                 phone: updatedUser.phone,
//                 token: getToken(updatedUser)
//             });
//         } else {
//             res.status(404).send({ message: 'Password old!' });
//         }
//     } else {
//         res.status(404).send({ message: 'User Not Found' });
//     }
// });

// router.put('/:id/info', isAuth, async (req, res) => {
//     const userId = req.params.id;
//     const user = await User.findById(userId);
//     if (user) {
//             user.fullName = req.body.fullName || user.fullName;
//             user.email = req.body.email || user.email;
//             user.avatar = req.body.avatar || user.avatar;
//             user.phone = req.body.phone || user.phone;
            
//             const updatedUser = await user.save();
//             res.send({
//                 _id: updatedUser._id,
//                 fullName: updatedUser.fullName,
//                 email: updatedUser.email,
//                 avatar: updatedUser.avatar,
//                 phone: updatedUser.phone,
//                 token: getToken(updatedUser)
//             });
//     } else {
//         res.status(404).send({ message: 'User Not Found' });
//     }
// });

router.get('/', async (req, res) => {
    const categories = await Category.find({});
    res.send(categories)
});

// router.post('/signup', async (req, res) => {
//     try {
//         console.log(req.files);

//         const hashedPassword = md5(req.body.password);

//         const user = new User({
//             password: hashedPassword,
//             fullName: req.body.fullName,
//             email: req.body.email,
//             phone: req.body.phone,
//             avatar: req.body.avatar,
//         });
//         const newUser = await user.save();
//         if (newUser) {
//             res.send(newUser);
//         }
//     } catch (error) {
//         res.status(401).send({ error: error, message: 'Invalid User data' });
//     }
// });

export default router;