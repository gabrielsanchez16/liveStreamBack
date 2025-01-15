const router = require('express').Router()
const verifyToken = require('../Middleware/verifyToken')
const {create,getAll,} = require('../http/message.http')


router.route("/register")
    .post(verifyToken,(req, res) => {
        const io = req.app.locals.io;  
        create(req, res, io);  
      })

router.route("/")
    .get(verifyToken,getAll)



    
exports.router = router