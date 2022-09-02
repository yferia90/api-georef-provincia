import { Document } from 'mongoose';

export interface UserInterface extends Document {
    username: string,
    email: string,
    password: string,
    encryptPassword(password: string): Promise<string>,
    validatePassword(password: string): Promise<boolean>,
}

export interface PayloadInterface extends Document {
    _id: string,
    iat: number,
    exp: number
}