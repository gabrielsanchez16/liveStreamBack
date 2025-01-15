const Usuarios = require('./User.js')
const Messages = require("./Message.js")


const initModels = () => {


    Usuarios.hasMany(Messages)
    Messages.belongsTo(Usuarios) 

}

module.exports = initModels;