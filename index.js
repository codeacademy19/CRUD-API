const Hapi = require('hapi');
const routes = require('./src/routes');
const model=require('./models');

const server = new Hapi.Server({
  port: 7000,
  host: '0.0.0.0',

});

server.route(routes);
// server.route({
//     path: '/user/{name}',
//     method: 'GET',
//     handler: async(request, h) =>{ 
//        const user=  await model.User.getUserByName(request.params.name);
//        return h.response(user);
//     },
//   });
const init=async ()=>{
    await server.start();
}
// module.exports = {
//   server,
// };
init();
//model.User.generate("abd","balaji","ajayb@gmail.com");
