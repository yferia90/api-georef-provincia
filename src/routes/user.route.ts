import { Router } from 'express';

import { signUp, signIn, listUsers } from '../controllers/user.controller';
import validateUser from '../validators/user.validator';

const userRoute: Router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *          required:
 *              - username
 *              - email
 *              - password
 *          example:
 *              username: flock10
 *              email: flock10@gmail.com
 *              password: flock10
 *      Login:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *          required:
 *              - email
 *              - password
 *          example:
 *              email: admin@gmail.com
 *              password: admin
*/

/**
 * @swagger
 * /v1/auth/users:
 *  get:
 *      summary: Gets users
 *      responses:
 *          200:
 *              description: Users
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: ''
 *                              data:
 *                                  type: array
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: User list.
 *          500:
 *              description: Internal server error
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: 'Internal server error.'
 *                              data:
 *                                  type: object
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: ''
*/
userRoute.get('/users', listUsers);

/**
 * @swagger
 * /v1/auth/signUp:
 *  post:
 *      summary: Insert a user into the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User inserted correctly
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: ''
 *                              data:
 *                                  type: array
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: User created successfully.
 *          500:
 *              description: Internal server error
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: 'Internal server error.'
 *                              data:
 *                                  type: object
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: ''
*/
userRoute.post('/signUp', validateUser,  signUp);

/**
 * @swagger
 * /v1/auth/signIn:
 *  post:
 *      summary: User login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema:
 *                      $ref: '#/components/schemas/Login'
 *      responses:
 *          200:
 *              description: User logged in successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: ''
 *                              data:
 *                                  type: array
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: The user logged successfully.
 *          500:
 *              description: Internal server error
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Describes whether an error occurred
 *                                  example: 'Internal server error.'
 *                              data:
 *                                  type: object
 *                                  description: It sends data if it is the case otherwise it return an empty object
 *                                  example: []
 *                              message:
 *                                  type: string
 *                                  description: If there is not error, send a message
 *                                  example: ''
*/
userRoute.post('/signIn', signIn);

export default userRoute;