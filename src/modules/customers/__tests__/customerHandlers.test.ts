import request from 'supertest';
import { app, server } from '../../../app';

let authToken: string;

beforeAll(async () => {
    const response = await request(app)
        .post('/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
            username: 'usuario',
            password: '123',
        });
    expect(response.status).toBe(200);
    authToken = response.body.token;
});

describe('GET /customers/', () => {
    it('Return 10 customers successfully', async () => {
        const response = await request(app)
            .get('/customers/')
            .set('Authorization', `Bearer ${authToken}`)
            .query({
                page: 1,
                pageSize: 10,
            });
        expect(response.status).toBe(200);
    });
});


afterAll(() => {
    server.close(); 
});
