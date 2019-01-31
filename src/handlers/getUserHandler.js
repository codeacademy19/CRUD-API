const model=require('../../models');
module.exports=async (request , h )=>{
    const user = await model.User.getUserByName(request.params.name);
    return h.response(user);
}