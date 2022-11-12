import UserController from '../controllers/users.controller.js';
import validate from '../helpers/validateSchema.js';
import createSchema from '../schemas/user.schema.js';
import ProductController from '../controllers/products.controller.js';
import validateToken from '../helpers/auth.js';

function routes(app){

    app.post('/api/login', UserController.loginUser);

    //app.get('/api/user/:id', UserController.showUser);
    //app.get('/api/users', UserController.indexUser);
    //app.post('/api/users', validate(createSchema), UserController.createUser);
    //app.put('/api/user/:id', validateToken, validate(createSchema), UserController.updateUser);
    //app.delete('/api/user/:id', validateToken, UserController.deleteUser);

    //app.get('/api/product/:id', validateToken, ProductController.showProduct);
    //app.get('/api/products', validateToken, ProductController.indexProduct);
    //app.post('/api/products', validateToken, ProductController.createProduct);
    //app.put('/api/product/:id', validateToken, ProductController.updateProduct);
    //app.delete('/api/product/:id', ProductController.deleteProduct);

}

module.exports = routes;