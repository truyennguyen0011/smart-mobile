import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

import config from './config';
import userRoute from './routes/userRoute';
import adminRoute from './routes/adminRoute';
import productRoute from './routes/productRoute';
import orderDetailsRoute from './routes/orderDetailsRoute';
import bannerRoute from './routes/bannerRoute';
import phoneSellingRoute from './routes/phoneSellingRoute';
import laptopSellingRoute from './routes/laptopSellingRoute';
import uploadRoute from './routes/uploadRoute';
import categoryRoute from './routes/categoryRoute';
import orderRoute from './routes/orderRoute';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/orders', orderRoute);
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/products', productRoute);
app.use('/api/orderdetails', orderDetailsRoute);
app.use('/api/getBestSellingBanner', bannerRoute);
app.use('/api/getBestSellingPhone', phoneSellingRoute);
app.use('/api/getBestSellingLaptop', laptopSellingRoute);

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.PORT, () => {
    console.log("Server running at http://localhost:" + config.PORT);
})