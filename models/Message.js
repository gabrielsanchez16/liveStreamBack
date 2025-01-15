const {Sequelize,DataTypes} = require('sequelize')
const {db} = require('../config/db.js')
const {v4: uuidv4} = require("uuid")
const { Users } = require('./User.js');

const Message = db.define("Messages",{
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:uuidv4,
        allowNull:false
    },
    comment:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    userId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    receiver:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timestamp: { 
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, 
        allowNull: false,
    },
})

Message.belongsTo(Users, {
    foreignKey: 'userId',
    as: 'user'  
});

module.exports = {
    Message
}