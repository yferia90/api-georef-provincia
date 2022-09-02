import UserModel from "../models/user.schema";
import { UserInterface } from "../types/user.type";

/**
 * All users
 * @returns 
 */
const getUsers = async () => {
    try{
        const allUsers = await UserModel.find({}).limit(10);
        return allUsers;
    }catch(err){
        return "Internal server error";
    }
}

/**
 * Registrar usuarios
 * @param user 
 * @returns 
 */
const registerUser = async (body: UserInterface) => {
    try{
        const user: UserInterface = new UserModel({
            username: body.username,
            email: body.email,
            password: body.password
        });
        user.password = await user.encryptPassword(user.password);
        const userSave = await UserModel.create(user);
        return userSave._id;
    }catch(err){
        return "Internal server error";
    }
}

/**
 * Detalles de un ususario dado el email
 * @param email
 * @returns 
 */
const getUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email });
    return user;
}

const getUserById = async (id: string) => {
    const user = await UserModel.findById({_id: id});
    return user;
}

export {
    getUsers,
    registerUser,
    getUserByEmail,
    getUserById
}