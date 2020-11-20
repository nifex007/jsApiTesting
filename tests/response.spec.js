const app = require('../src/app');
const request_ = require('supertest');
const expect = require('chai').expect;

describe('response', () => {
    it('json', () => {
        request_(app).get('/course').end((error, response) => {
            expect(response.body.id).to.be.equal('1');
        });
    });

    it('text', () => {
        request_(app).get('/course').end((error, response) => {
            expect(response.text).to.contain('1');
        });
    });

    it('status', () => {
        request_(app).get('/course').end((error, response) => {
            expect(response.ok).to.be.true;
        });
    })
});