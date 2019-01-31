const updateUserHandler = require('../handlers/updateUserHandler');
const Joi=require('joi');

module.exports = [{
  path:   '/user/{name}',
  method: 'PUT',
  handler: updateUserHandler,
  config: {
    validate: {
        payload: {
            email:Joi.string().required()
        },
        params: {
            name: Joi.string().required()
        }
    }
}
}];