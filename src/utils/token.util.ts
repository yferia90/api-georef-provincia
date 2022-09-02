import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getUserById } from '../services/user.service';
import { PayloadInterface } from '../types/user.type';

const NODE_ENV = `${process.env.NODE_ENV}`;
const JWT_SECRET = `${process.env.JWT_SECRET}`;
const JWT_SECRET_TEST = `${process.env.JWT_SECRET_TEST}`;

const JWTSECRET = NODE_ENV === 'test' ? JWT_SECRET_TEST : JWT_SECRET;

// Generando un token
const getToken = async (id: string) => {    
    const token: string = jwt.sign({_id: id}, JWTSECRET, {
        expiresIn: 60
    });
    return token;
}

// validate token 
const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header('Authorization');
        if(!token) return res.status(401).json('Access deneid');
    
        const payload = jwt.verify(token, JWTSECRET) as PayloadInterface;    
        if(payload){
            const id = payload._id;
            const user = await getUserById(id);
            if(!user) return res.status(404).json('Not user found');
        }
        next();
    }catch(err){
        return res.status(404).json('Invalid token.');
    }
}

export {
    getToken,
    tokenValidation
}