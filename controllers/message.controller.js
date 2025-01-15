const { Message } = require("../models/Message.js")
const { Users } = require("../models/User.js")


const createMessage = async (comment, userId, receiver) => {
    const newMessage = await Message.create({
        comment,
        userId,
        receiver
    })
    return newMessage
}

const getAllMessage = async () => {
    const data = await Message.findAll({
        include: [
            {
                model: Users,
                as: "user",
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt', 'password'] 
                }
            }
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        order: [['createdAt', 'ASC']] 
    });
    return data;
};


module.exports = {
    createMessage,
    getAllMessage
}