import mongoose from 'mongoose';

const usersData = [
    {
        "_id": new mongoose.Types.ObjectId().toString(),
        "username": "admin",
        "email": "admin@gmail.com",
        "password": "admin"
    },
    {
        "_id": new mongoose.Types.ObjectId().toString(),
        "username": "admin1",
        "email": "admin1@gmail.com",
        "password": "admin"
    }
]

export default usersData;