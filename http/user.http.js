const { JWT_EXPIRATION,JWT_SECRET } = require('../config/config');
const { createUser } = require('../controllers/user.controller')
const { Users } = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const create = async (req, res) => {
    const { name, user, password, type_user } = req.body;


    if (!name || !user || !type_user || !password) {
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required.',
            fields: {
                name: 'string',
                user: 'string',
                type_user: 'string',
                password: 'string',
            },
        });
    }


    const existUser = await Users.findOne({
        where: { user },
    });

    if (existUser) {
        return res.status(409).json({
            status: 'error',
            message: `The user ${user} already exists. Please choose another one.`,
        });
    }

    try {
        
        const response = await createUser(name, user, password, type_user);


        return res.status(201).json({
            status: 'success',
            message: `User successfully created with ID: ${response.id}`,
            user: response,
        });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({
            status: 'error',
            message: 'There was an error creating the user.',
        });
    }
};

const login = async (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({
            status: "error",
            message: "All fields are required.",
            fields: {
                user: "string",
                password: "string",
            },
        });
    }

    try {
        const userDb = await Users.findOne({
            where: { user },
            attributes: { exclude: ["updatedAt", "createdAt"] },
        });

        if (!userDb) {
            return res.status(404).json({
                status: "error",
                message: "The user does not exist.",
            });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, userDb.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                status: "error",
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign(
            {
                id: userDb.id,
                user_name: userDb.user,
                type_user: userDb.type_user
            },
            JWT_SECRET, 
            {
                expiresIn: JWT_EXPIRATION 
            }
        );

        return res.status(200).json({
            status: "success",
            message: "Successful login.",
            token: `Bearer ${token}`,
            user: {
                name:userDb.name,
                user:userDb.user,
                type_user:userDb.type_user,
                id:userDb.id
            }
        });
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({
            status: "error",
            message: "An internal error occurred on the server.",
        });
    }
};



module.exports = {
    create,
    login,
}