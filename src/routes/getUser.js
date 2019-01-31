const getUserHandler = require('../handlers/getUserHandler');
const Joi=require('joi');

module.exports = [{
  path:   '/user/{name}',
  method: 'GET',
  handler: getUserHandler,
  config :{
      validate:{
          params:{
              name:Joi.string().required()
            }
         }

    }
}];