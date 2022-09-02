import { Request, Response } from "express";

import { getToken } from '../utils/token.util';
import { registerUser, getUserByEmail, getUsers } from "../services/user.service";
import { ResponseSuccess, ResponseError } from '../utils/response.util';

const listUsers = async (req: Request, res: Response) => {
    try{
        const listUsers = await getUsers();
        ResponseSuccess(res, 200, listUsers, 'User list.');
    }catch(err){
        ResponseError(res, 500, 'Internal server error.');
    }
}


const signUp = async (req: Request, res: Response) => {
    try{
        const { body } = req;
        const userId = await registerUser(body);
        const token = await getToken(userId);
        ResponseSuccess(res, 200, [], 'User created successfully.', token);
    }catch(err){
        ResponseError(res, 500, 'Internal server error.');
    }
}

const signIn = async ({ body }: Request, res: Response) => {
    try{
        const { email, password } = body;
        const user = await getUserByEmail(email);
        if(!user) return res.status(400).json('Email or password is wrong');
        const isValidPass: boolean = await user.validatePassword(password);
        if(!isValidPass) return res.status(400).json('Invalid password');
    
        const token = await getToken(user._id);
        ResponseSuccess(res, 200, user, 'The user logged successfully.', token);
    }catch(err){
        ResponseError(res, 500, 'Internal server error.');
    }
}

export {
    listUsers,
    signUp,
    signIn
}