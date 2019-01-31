const model=require('../../models');
module.exports=async ()=>{
    const users = await model.User.getAllUsers();
    return users;
}