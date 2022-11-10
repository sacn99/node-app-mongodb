const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const usersCtrl = {};

usersCtrl.loginUser = async (req, res, next) => {

    const { username, password } = req.body

    if(!username || !password){
        res.status("400").send("username and password are required")
    }

    const user = await User.findOne({username});

    
    if(user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign( {user_id: user._id, username}, process.env.TOKENSECRET, {expiresIn: "2h"} );
            
        user.token = token;

        res.status(200).json(user);

    }else{
        res.status(400).send("Invalid credentials");
    }
}

usersCtrl.createUser = async (req, res, next) => {
   
    const userExist = await User.findOne({username: req.body.username});

    if(userExist){
        return res.status("409").send("User already exists");
    }

    let encryptedPassword = await bcrypt.hash(req.body.password, 10);

    let user = new User({
        name: req.body.firstname,
        email: req.body.lastname,
        username: req.body.username,
        password: encryptedPassword,
        identification: req.body.identification,
        active: req.body.active,
    })

   
    user.save(err => {
        if(err)
            return next(err)
        res.send('user created successfully')
    })
}

usersCtrl.indexUser = (req, res , next) => {
    User.find({}, (err, users) => {
        if (err)
            return next(err)
        res.send(users)
    })
}

usersCtrl.showUser = (req, res , next) => {
    User.findById(req.params.id, (err, user) => {
        if (err)
            return next(err)
        res.send(user)
    })
}

usersCtrl.updateUser = async (req, res , next) => {
    if(req.user.user_id != req.params.id){
        return res.status(401).send('You cannot update other users, only yourself')
    }
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);
    let userToEdit = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: encryptedPassword,
        identification: req.body.identification,
        photo: req.body.photo,
        active: req.body.active
    }
    User.findByIdAndUpdate(req.params.id, {$set: userToEdit}, (err, user) => {
        if (err)
            return next(err)
        res.send('User updated successfully')
    })
}

usersCtrl.deleteUser = (req, res , next) => {
    if(req.user.user_id != req.params.id){
        return res.status(401).send('You cannot delete other users, only yourself')
    }
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err)
                return next(err)
            res.send('User deleted successfully')
        })
    
    
}