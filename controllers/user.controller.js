const {Users} = require("../models/User.js")




const createUser = async (name,user,password,type_user) => {

    const newUser = await Users.create({
        name,
        user,
        password,
        type_user
    })

    return  {
        "id":newUser?.id,
        "name": newUser?.name,
        "user": newUser?.user,
        "type_user": newUser?.type_user,
      };
}

const getUserById = async (id)=>{
    const data = Users.findOne({
        where:{
            id:id
        },
        attributes: {
            exclude: ['password',"updatedAt","createdAt"]
        }
    })
    return data
}





module.exports = {
    createUser,
    getUserById
}