const { getOne, createOne } = require('../models/userModel');

const getOneUser =async(mail, pass)=>{

    const data = await getOne({email: mail}, {password: pass});
    return data;
}

const createOneUser =async(newUser)=>{
    const userSchema={
        name: newUser.name, 
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password
    }
    const data = await createOne([Object.values(userSchema)]);
    return data;
}

module.exports={
    getOneUser,
    createOneUser
}