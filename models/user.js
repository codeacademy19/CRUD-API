'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
     email: DataTypes.STRING
  }, {});
  //User.associate = function(models) {
    // associations can be defined here
  //};
  User.generate=(firstName,lastName,email)=>{
    return User.create({firstName,lastName,email});
  }
  User.getAllUsers=()=>{
    return User.findAll();
  }
  User.getUserByName=(name)=>{
    return User.findAll({
      where:{
        firstName:name
      }
    })
  }
  User.updateUser=(firstName,newEmail)=>{
    User.update({
      email:newEmail,
    }, {
      where: {
        firstName: firstName
      }
    })
  }
  User.deleteUser=(firstName)=>{
    User.destroy({
      where: {
        firstName: firstName
      }
    });
  }
  return User;
};