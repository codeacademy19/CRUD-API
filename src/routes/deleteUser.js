const deleteUserHandler = require('../handlers/deleteUserHandler');
const Joi=require('joi');

module.exports = [{
  path:   '/user/{name}',
  method: 'DELETE',
  handler: deleteUserHandler,
  config: {
    validate: {
        params: {
            name: Joi.string().required()
        }
    }
}
}];