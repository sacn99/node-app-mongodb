const {Router} = require('express')
const router = Router()
const auth = require('../helpers/auth')
const validate = require('../helpers/validate')
const schemas = require('../models/schemas')

const {userCreate, userLogin, userIndex, userShow, userUpdate, userDelete, renderIndex, renderAbout} = require('../controllers/index.controllers')

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.post('/api/register', userCreate);

router.post('/api/login', userLogin);

router.get('/api/index', userIndex);

router.get('/api/:id', userShow);

router.put('/api/:id', userUpdate);

router.delete('/:id', userDelete)

module.exports = router;