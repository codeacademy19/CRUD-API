const model=require('../../models');
module.exports=async (request,h)=>{
    try{
    const users = await model.User.generate(request.payload.firstname,request.payload.lastname,request.payload.email);
    return h.response('Inserted Successfully!!') 
    }catch(err){
        return h.response('Unsuccess');
    }
}