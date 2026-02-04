const request = require('supertest');
const app = require('./app');

test('GET / returns Hello CI/CD!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello CI/CD!');
});
