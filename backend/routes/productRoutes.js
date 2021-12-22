import express from 'express';
import Product from '../models/productModel.js';


const router = express.Router();

router.get('/', (req, res) => {
    Product.find()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error fetching products',
                error: err
            });
        });
});
// get product by id
    router.get('/:id', (req, res) => {
        Product.findById(req.params.id)
            .then(product => {
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({ message: 'No valid entry found for provided ID' });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error fetching product',
                    error: err
                });
            });
    });

export default router