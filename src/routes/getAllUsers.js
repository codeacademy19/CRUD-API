const getUsersHandler = require('../handlers/getUsersHandler');

module.exports = [{
  path: '/users',
  method: 'GET',
  handler: getUsersHandler,
}];