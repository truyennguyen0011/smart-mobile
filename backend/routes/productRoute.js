import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products)
});

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not found!" })
    }
});

router.post('/:id/reviews', isAuth, async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    if (product) {
        const review = {
            reviewerName: req.body.name,
            rating: Number(req.body.rating),
            comment: req.body.comment,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = Math.round((product.reviews.reduce((a, c) => c.rating + a, 0) /
            product.reviews.length) * 10 + Number.EPSILON) / 10;
        const updatedProduct = await product.save();
        res.status(201).send({
            data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
            message: 'Review saved successfully.',
        });
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

router.post("/", isAuth, isAdmin, async (req, res) => {
    const product = new Product({
        prdName: req.body.prdName,
        categoryID: req.body.categoryID,
        prdImage: req.body.prdImage,
        prdBrand: req.body.prdBrand,
        pricePromotion: req.body.pricePromotion,
        priceNormal: req.body.priceNormal,
        categoryName: req.body.categoryName,
        countInStock: req.body.countInStock,
        description: req.body.description,
        prdCreatedAt: req.body.prdCreatedAt,
        prdUpdatedAt: req.body.prdCreatedAt,
        specifications: {...req.body.specifications},
        reviews: []
    });

    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: "New product created", data: newProduct });
    }
    return res.status(500).send({ message: "Error in Creating product." });
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });

    if (product) {
        product.prdName = req.body.prdName ? req.body.prdName : product.prdName;
        product.categoryID = req.body.categoryID ? req.body.categoryID : product.categoryID;
        product.prdImage = req.body.prdImage ? req.body.prdImage : product.prdImage;
        product.prdBrand = req.body.prdBrand ? req.body.prdBrand : product.prdBrand;
        product.pricePromotion = req.body.pricePromotion >= 0 ? req.body.pricePromotion : product.pricePromotion;
        product.priceNormal = req.body.priceNormal > 0 ? req.body.priceNormal : product.priceNormal;
        product.categoryName = req.body.categoryName ? req.body.categoryName : product.categoryName;
        product.countInStock = req.body.countInStock >= 0 ? req.body.countInStock : product.countInStock;
        product.description = req.body.description;
        product.prdUpdatedAt = req.body.prdCreatedAt ? req.body.prdCreatedAt : product.prdUpdatedAt;
        product.specifications = {...req.body.specifications};

        const updatedProduct = await product.save();
        if (updatedProduct) {
            return res.status(200).send({ message: "Product Updates", data: updatedProduct });
        }
    }
    return res.status(500).send({ message: "Error in Updating product." });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({ message: "Product Deleted." });
    } else
        res.send("Error in Deletion.")
});


// router.get("/createproduct", async (req, res) => {
//     try {
//         const product = new Product({
//             prdName: "Samsung Galaxy A11",
//             categoryID : "5f218fe4c54c0bbf81a06a28",
//             prdLink: "samsung-galaxy-a11",
//             prdImage: "https://cdn.fptshop.com.vn/Uploads/Originals/2020/6/2/637267167456120953_SS-A11-xanh-1.png",
//             prdBrand: "Samsung",
//             pricePromotion: "3.100.000₫",
//             priceNormal: "3.690.000₫",
//             categoryName: "phone",
//             countInStock: 10,
//             description: "Perfect",
//             rating: 0,
//             numReviews: 0,
//             prdCreatedAt: new Date(),
//             prdUpdatedAt: new Date(),
//             specifications:
//             {
//                 screen: "6.4 inches, HD +, 720 x 1560 Pixels",
//                 cardScreen: "Undefine",
//                 cpu: "Snapdragon 450 8 nhân, 8, 1.8 GHz",
//                 gpu: "Adreno 506",
//                 ram: "3 GB",
//                 rom: "32 GB",
//                 operatingSys: "Android 10",
//                 origin: "Việt Nam",
//                 mfg: "2020",
//                 camFront: "8.0 MP",
//                 camRear: "Chính 13 MP & Phụ 5 MP, 2 MP",
//                 sim: "Nano SIM, 2 Sim",
//                 battery: "4000 mAh"
//             },
//             reviews: []
//         });

//         const newProduct = await product.save();

//         res.send({ newProduct, msg: "Created new product" });
//     } catch (error) {
//         res.send({ msg: error.message })
//     }
// });

export default router;