const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productController");

const router = express.Router();



router.route("/products").get(getAllProducts);

router.route("/products").post(createProduct);
// router.routes("/products").post(createProduct);
module.exports = router;