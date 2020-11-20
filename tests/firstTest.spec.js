const express = require('express');
const request_ = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (error, response) => {
    response.status(200).json({'OK': 'response'})
});


describe('First test', () => {
    it('OK response', () => {
        request_(app).get('/first').end((error, response) => {
            expect(response.statusCode).to.be.equal(200)
        });
    });

    it("Mocked OK Response", (done) => {
        request_('https://run.mocky.io')
        .get('/v3/122c77d4-c35b-4d68-89f5-1c254f4928ff').expect(200, done)
    });
});