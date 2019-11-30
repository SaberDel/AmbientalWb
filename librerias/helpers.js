const bcrypt = require('bcryptjs');

const helpers = {};
dato= new Boolean(false);

helpers.encryptPassword = async (password, savedPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}; 

helpers.desencriptarPass= async (password)=>
{
  const salt1 = await bcrypt.genSalt(0);
  const hash1 = await bcrypt.hash(password, salt1);
  return hash1;
}


helpers.matchPassword = async (password, savedPassword) => {
  try {
        console.log(password);
        console.log(savedPassword);
        return await bcrypt.compare(password, savedPassword);


  } catch (e) {
    console.log(e)
  }
};

module.exports = helpers;