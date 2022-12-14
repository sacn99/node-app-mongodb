const User = require('../models/user')
const Product = require('../models/product')

exports.createProduct = async (req, res, next) => {
   if(req.user.username != req.body.username)
   {
        return res.status(401).send('you cannot create products with a different username than yours')
   }
    const userExist = await User.findOne({username: req.body.username});

    if(!userExist){
        return res.status("409").send("User does not exists");
    }

    let product = new Product({
        name: req.body.title,
        description: req.body.comment,
        quantity: req.body.quantity,
        brand: req.body.brand,
        username: req.body.username,
    })
   
    product.save(err => {
        if(err)
            return next(err)
        res.send('product created successfully')
    })
}

exports.indexProduct = (req, res , next) => {
    Product.find({username: req.user.username}, (err, products) => {
        if (err)
            return next(err)
        res.send(products)
    })
}

exports.showProduct = (req, res , next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            return next(err)
        if(req.user.username == product.username){
            res.send(product)
        }else{
            return res.status(401).send("you can't see other users products")
        }
    })
}

exports.updateProduct = (req, res , next) => {
    
    Product.findById(req.params.id, (err, product) => {
        if (err)
            return next(err)
        if(req.user.username == note.username){
            Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
                if (err)
                    return next(err)
                res.send('User updated successfully')
            })
        }else{
            return res.status(401).send("you can't update other users products")
        }
    })
    
}

exports.deleteProduct = (req, res , next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err)
            return next(err)
        if(req.user.username == product.username){
            Product.findByIdAndRemove(req.params.id, (err, product) => {
                if (err)
                    return next(err)
                res.send('Product deleted successfully')
            })
        }else{
            return res.status(401).send("you can't delete other users products")
        }
    })
    
}