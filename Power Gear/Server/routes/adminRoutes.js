const express = require('express');
const router = express.Router();
const Product = require('../database/products');
const User = require('../database/users');
const Order = require('../database/order');

//require JWT token verification

router.get('/getUsers',User.getAllUsers);
router.delete('/Users/:userId',User.deleteUser)
router.get('/products', Product.getAllproducts);
router.post('/add', Product.addProduct);
router.put('/products/:productid', Product.modifyProduct); 
router.delete('/products/:productid', Product.removeProduct);
router.get('/orders', Order.getAllorders);
router.get('/orders/:orderId', Order.getOrder);
router.put('/orders/:orderId', Order.markOrder);

module.exports = router;