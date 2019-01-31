const model=require('../../models');
module.exports=async (request , h )=>{
    try{
        const user = await model.User.deleteUser(request.params.name);
        return h.response('DELETED Successfully!!');
    }catch(err){
        return h.response('ERROR while deleting');
    }
}