const {Routes} = require('express')
const router = Router()
const validate = require('../helpers/validate')
const auth = require('../helpers/auth')

/*
const { showUser, indexUser, createUser, loginUser, updateUser, deleteUser } = require('../controllers/users.controller');

router.get('/:id', showUser)

router.get('/', indexUser)

router.post('/register', validate(schemas.user), createUser)

router.post('/login', loginUser)

router.put('/:id', auth,validate(schemas.user), updateUser)

router.delete('/:id', auth, deleteUser)
*/
module.exports = router;