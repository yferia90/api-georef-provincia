import UserModel from "../models/user.schema";
import logger from '../utils/logger.utils';
import usersData from './user.data';
import connectDataBase from '../db/mongo';
import { getUserByEmail, bulkUsersDB } from '../services/user.service';

const seedUsers = async () => {
    try{
        await connectDataBase();
        let newUsersDataInsert = [];
        for (let index = 0; index < usersData.length; index++) {
            const findUserByEmail = await getUserByEmail(usersData[index].email);
            if(!findUserByEmail) newUsersDataInsert.push(usersData[index]);
        };
        if(newUsersDataInsert.length > 0){
            const saveUsers = await bulkUsersDB(newUsersDataInsert);
            return saveUsers;
        }else {
            return null;
        }
    }catch(err){
        logger.info(err);
        return err;
    }
}

export default seedUsers;