const app = require('../src/app');
const request_ = require('supertest');
const expect = require('chai').expect;

describe('GET request', () => {
    it('GET id', () => {
        request_(app).get('/course/1').end((error, response) => {
            expect(response.body.id).to.be.equal('1')
        });
    });

    it('GET query name param', (done) => {
        request_(app).get('/course').query({'name': 'mocha'})
        .expect(200, {id: '1', name: 'mocha'}, done);
    });
});