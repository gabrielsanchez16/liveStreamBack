const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const bcrypt = require('bcrypt') 
const {v4: uuidv4} = require("uuid")

const Users = db.define('user',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    user:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    type_user:{
        type: DataTypes.STRING,
        allowNull:false
    }

},{
        hooks: {
            beforeCreate: async function(usuario) {
                const salt = await bcrypt.genSalt(10)
                usuario.password = await bcrypt.hash(usuario.password, salt)
            }
        }
    })


    Users.prototype.verificarPassword = function(password) {
        return bcrypt.compareSync(password, this.password)
    }

module.exports ={
    Users
}