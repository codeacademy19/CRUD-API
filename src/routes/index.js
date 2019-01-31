//const pingRoutes = require('./ping');
const update = require('./updateUser');
const getAll=require('./getAllUsers');
const get=require('./getUser');
const insert=require('./insertUser');
const deleteH=require('./deleteUser');

module.exports = [
  ...get,
  ...getAll,
  ...update,
  ...insert,
  ...deleteH
];
