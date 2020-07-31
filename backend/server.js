import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bannerRoute from './routes/bannerRoute';
import phoneSellingRoute from './routes/phoneSellingRoute';
import laptopSellingRoute from './routes/laptopSellingRoute';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json()); 
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/getBestSellingBanner', bannerRoute);
app.use('/api/getBestSellingPhone', phoneSellingRoute);
app.use('/api/getBestSellingLaptop', laptopSellingRoute);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.PORT, () => {
    console.log("Server running at http://localhost:" + config.PORT);
})