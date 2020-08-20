import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config';

const router = express.Router();

const storageUser = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/users');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

const uploadUser = multer({ storage: storageUser });

router.post('/user', uploadUser.single('image'), (req, res) => {
    const data = req.file.path.split('\\').join('/');
    res.send(`/${data}`);
});


// _________ //
const storageProduct = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/products');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

const uploadProduct = multer({ storage: storageProduct });

router.post('/product', uploadProduct.single('image'), (req, res) => {
    const data = req.file.path.split('\\').join('/');
    res.send(`/${data}`);
});


aws.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
});
const s3 = new aws.S3();
const storageS3 = multerS3({
    s3,
    bucket: 'amazona-bucket',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
        cb(null, file.originalname);
    },
});
const uploadS3 = multer({ storage: storageS3 });
router.post('/s3', uploadS3.single('image'), (req, res) => {
    res.send(req.file.location);
});
export default router;