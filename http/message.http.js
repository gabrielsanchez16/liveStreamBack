const {createMessage,getAllMessage} = require("../controllers/message.controller");
const { Users } = require("../models/User");

const create = async (req, res, io) => {
    const { comment, user_id, receiver } = req.body;

    if (!comment || !user_id || !receiver) {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                comment: "string",
                user_id: "uuid",
                receiver: "string"
            },
        });
    }


    if (!isValidUUID(user_id)) {
        return res.status(400).json({
            message: 'user_id must be valid UUIDs'
        });
    }


    try {
        const response = await createMessage(comment, user_id, receiver);

        const user = await Users.findOne({
            where:{id:user_id}
        })


        io.emit('newMessage', {
            comment: response.comment,
            user_id: response.user_id,
            user: {
                name:user.name,
                user:user.user,
                type_user:user.type_user
            },
            receiver: response.receiver,
            createdAt: response.createdAt,
        });

        return res.status(201).json({
            message: 'Comment has been successfully created',
            comment: response
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error while creating the comment' });
    }
};

const isValidUUID = (id) => {
    const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return regex.test(id);
};


const getAll = (req,res)=>{
   
        const response = getAllMessage()
            .then((response) => {
                res.status(200).json({ 
                    message: `comment have been successfully recovered`,
                    comments: response
                })
            })
            .catch(err=> {
                console.log(err)
            }) 
    };



module.exports = {
    create,
    getAll
} 