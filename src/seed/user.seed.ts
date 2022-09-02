import seeder from 'mongoose-seeder';

const USER = {
    "users":{
        "_model": "UserModel",
        "foo": {
            "username": "admin",
            "email": "admin@gmail.com",
            "password": "admin"
        }
    }
}

const seedUser = async () => {
    try{
        seeder.seed(USER, {dropDatabase: true}, (data, err) => {
        });        
    }catch(err){
    }
}

export default seedUser;