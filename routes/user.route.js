const router = require('express').Router()
const { create, login } = require('../http/user.http')

//Registrar Usuario
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: nombre del usuario
 *              user:
 *                  type: string
 *                  description: usuario
 *              password:
 *                  type: string
 *                  description: contraseña del usuario
 *              type_user:
 *                  type: string
 *                  description: rol del usuario
 *          required:
 *              -name
 *              -user
 *              -password
 *              -type_user
 *          example:
 *              name: Hugo ruiz
 *              user: Hgo_095
 *              password:   Class2025
 *              type_user: moderador
 */

/**
 * @swagger
 * /api/v1/user/register:
 *  post:
 *      summary: registra un nuevo usuario 
 *      tags: [User]    
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: usuario creado correctamente 
 */

router.route("/register")
  .post(create)

router.route("/login")
  .post(login)


exports.router = router


