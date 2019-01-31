const insertUserHandler = require('../handlers/insertUserHandler');
const Joi=require('joi');

module.exports = [{
  path:   '/user',
  method: 'POST',
  handler: insertUserHandler,
  config: {
    validate: {
        payload: {
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email:Joi.string().required()
        }
    }
}
}];