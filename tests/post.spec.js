const app = require('../src/app');
const request_ = require('supertest');
const expect = require('chai').expect;

describe('POST request', (done) => {
    it('json', () => {
        request_(app).post('/course').send({'name': 'supertest'})
         .set('Accept', 'application/json').end((error, response) => {
            expect(response.body.name).to.be.equal('supertest');
         });
    });

    it('form', () => {
        request_(app).post('/course').send('name=supertest')
        .set('Accept', 'application/x-www-form-urlencoded')
        .expect(200, {'id': '2', 'name': 'supertest'}, done)
    });
})