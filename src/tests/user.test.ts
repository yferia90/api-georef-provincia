import request from 'supertest';
import app from '../config/express.config';

describe('Test user endpoints', () => {
    test('save user POST [ ERROR ]', async () => {
        const saveUserPOST = await request(app).post('/v1/auth/signUp').send({
            "username": "flock",
            "email": "flock@gmail.com",
            "password": "flock"
        });
        const body = saveUserPOST.body;
        const { message } = body;
        expect(saveUserPOST.statusCode).toBe(200);
        expect(message).toBe('User vcreated successfully......');
    });

    test('login user POST [ SUCCESS ]', async () => {
        const saveUser = await request(app).post('/v1/auth/signUp').send({
            "username": "flock1",
            "email": "flock1@gmail.com",
            "password": "flock1"
        });
        const token = saveUser.header.authorization;
        const loginUser = await request(app).post('/v1/auth/signIn')
        .set('Authorization', token)
        .send({
            "email": "flock1@gmail.com",
            "password": "flock1"
        });
        const body = loginUser.body;
        const { message } = body;
        expect(message).toBe('The user logged successfully.');
    });
});