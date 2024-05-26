
module.exports = (connection, DataTypes) => {
const User = connection.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  adress:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Phone:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
  
});
return User
}



