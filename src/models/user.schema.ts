import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

import { UserInterface } from '../types/user.type';

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

// Encriptado de la contraseña del usuario
UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

// Validando que la contraseña sea la correcta.
UserSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

const UserModel = model<UserInterface>("users", UserSchema);

export default UserModel;