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
        res.status(404).send({message: "Product not found!"})
    }
});

// router.post("/", isAuth, isAdmin, async (req, res) => {
//     const product = new Product({
//         name: req.body.name,
//         price: req.body.price,
//         image: req.body.image,
//         brand: req.body.brand,
//         category: req.body.category,
//         countInStock: req.body.countInStock,
//         description: req.body.description,
//         rating: req.body.rating,
//         numReviews: req.body.numReviews
//     });

//     const newProduct = await product.save();
//     if (newProduct) {
//         return res.status(201).send({ message: "New product created", data: newProduct });
//     }
//     return res.status(500).send({ message: "Error in Creating product." });
// });

// router.put("/:id", isAuth, isAdmin, async (req, res) => {
//     const productId = req.params.id;
//     const product = await Product.findOne({ _id: productId });

//     if (product) {
//         product.name = req.body.name;
//         product.price = req.body.price;
//         product.image = req.body.image;
//         product.brand = req.body.brand;
//         product.category = req.body.category;
//         product.countInStock = req.body.countInStock;
//         product.description = req.body.description;
//         const updatedProduct = await product.save();
//         if (updatedProduct) {
//             return res.status(200).send({ message: "Product Updates", data: updatedProduct });
//         }
//     }
//     return res.status(500).send({ message: "Error in Updating product." });
// });

// router.delete("/:id", isAuth, isAdmin, async (req, res) => {
//     const deletedProduct = await Product.findById(req.params.id);
//     if (deletedProduct) {
//         await deletedProduct.remove();
//         res.send({ message: "Product Deleted." });
//     } else
//         res.send("Error in Deletion.")
// });


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