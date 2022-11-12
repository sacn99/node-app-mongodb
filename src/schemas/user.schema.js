import {object, string, number} from 'zod'

const createUSchema = object({
    username: string({
        required_error: 'Username is required',
    }).min(8, 'Username too short').max(16, 'Username too long'),

    password: string({
        required_error: 'Password is required',
    }).min(6, 'Password too short'),

    identification: number({
        required_error: 'Identification is required',
        invalid_type_error: "Identification must be a number",
    }),
})

module.exports = createUSchema;