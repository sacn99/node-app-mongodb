const {Router} = require('express')
const router = Router()
const auth = require('../helpers/auth')
const validate = require('../helpers/validate')
const schemas = require('../models/schemas')

const {userCreate, userLogin, userIndex, userShow, userUpdate, userDelete, productCreate, productRead, productShow, renderIndex, renderAbout, productUpdate} = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router;