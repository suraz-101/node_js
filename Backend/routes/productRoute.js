const express = require("express");
const { getAllProducts, createProduct, updateProduct } = require("../controllers/productController");

const router = express.Router();



router.route("/products").get(getAllProducts).post(createProduct);


// router.routes("/products").post(createProduct);

router.route("/product/:id").put(updateProduct);
module.exports = router;