const joi = require('joi');
const schemas = {

    user: joi.object().keys({
        name: joi.string().alphanum().required(),
        email: joi.string().alphanum().required(),
        username: joi.string().alphanum().min(8).max(16).required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
        identification: joi.number().required(),
        active: joi.boolean().required(),
        token: [joi.string(), joi.number()]
        
    }),

    note: joi.object().keys({
        name: joi.string().alphanum().required(),
        description: joi.string().required(),
        quantity: joi.number().required(),
        brand: joi.string().alphanum(),
        username: joi.string().alphanum()
    })

}

module.exports = schemas;