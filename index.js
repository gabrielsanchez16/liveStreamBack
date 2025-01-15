//* Dependencias
const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors')
const { db } = require('./config/db.js')
const dotenv = require('dotenv')
const { Server } = require('socket.io')
dotenv.config({ path: ".env" })
const initModels = require("./models/initModels")

//* Archivos de Rutas

const userRouter = require('./routes/user.route.js').router
const messageRouter = require("./routes/message.route.js").router


const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerSpec = require("./swagger")


const app = express()
const server = http.createServer(app);

const io = new Server(server, {
    connectionStateRecovery: {}
})

io.on('connection', async (socket) => {
    console.log('a user has connected!')

    socket.on('disconnect', () => {
        console.log('an user has disconnected')
    })

})

app.use(express.urlencoded({ extended: true }))



try {
    db.authenticate();
    db.sync()
    console.log('conexion correcta a la base de datos')
} catch (error) {
    console.log(error)
}


app.use(cors())
app.locals.io = io;
app.use(express.json())
app.use("/api/v1/user", userRouter)
app.use("/api/v1/message", messageRouter)
app.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))



const port = process.env.PORT || 3000



app.listen(port, () => {
    console.log(`server started at port ${port}`)
})


exports.default = app