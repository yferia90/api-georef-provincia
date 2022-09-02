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
            console.log('resultDB!!!!',data);
            console.log('resultDB!!!!',err);
        });        
    }catch(err){
        console.log('ERROR!!!',err);
        console.log('Coult not inset seed.');
    }
}

export default seedUser;