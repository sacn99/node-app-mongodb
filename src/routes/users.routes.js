const {Router} = require('express')
const router = Router()
const userCtrl = require('../controllers/users.controller')

router.post('/api/register', userCtrl.userCreate);

router.post('/api/login', userCtrl.userLogin);

router.get('/api/index', userCtrl.userIndex);

router.get('/api/:id', userCtrl.userShow);

router.put('/api/:id', userCtrl.userUpdate);

router.delete('/:id', userCtrl.userDelete);

module.exports = router;