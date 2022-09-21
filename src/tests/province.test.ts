import request from 'supertest';
import app from '../config/express.config';

describe('Province', () => {
    test('Lat lon by province GET [ SUCCESS ]', async () => {
        // Este endpoint requiere autenticación.
        const loginUser = await request(app).post('/v1/auth/signIn')
        .send({
            "email": "flock@gmail.com",
            "password": "flock"
        });
        const token = loginUser.header.authorization;
        const latlonProvince = await request(app).get('/v1/province/latlong?province=jujuy')
        .set('Authorization', token);
        expect(latlonProvince.statusCode).toBe(200);
    });
});