const model=require('../../models');
module.exports=async (request , h )=>{
    try{
        const user = await model.User.updateUser(request.params.name,request.payload.email);
        return h.response('Updated Successfully!!');
    }catch(err){
        return h.response('ERROR while updating');
    }
}