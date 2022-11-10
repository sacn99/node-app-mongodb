const {Routes} = require('express')
const router = Router()

const { showProduct, indexProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');

router.get('/:id', auth, showProduct)

router.get('/', auth, indexProduct)

router.post('/add',auth, createProduct)

router.put('/:id', auth, updateProduct)

router.delete('/:id', auth, deleteProduct)

module.exports = router