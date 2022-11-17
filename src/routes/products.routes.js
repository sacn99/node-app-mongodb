const {Router} = require('express')
const router = Router()
const productCtrl = require('../controllers/products.controller')
const auth = require('../helpers/auth')


router.get('/:id', auth, productCtrl.showProduct)

router.get('/', auth, productCtrl.indexProduct)

router.post('/add',auth, productCtrl.createProduct)

router.put('/:id', auth, productCtrl.updateProduct)

router.delete('/:id', auth, productCtrl.deleteProduct)

module.exports = router