const { getOne } = require('../models/userModel');

const getOneUser =async(mail, pass)=>{

    const data = await getOne({email: mail}, {password: pass});
    return data;
}

module.exports={
    getOneUser
}