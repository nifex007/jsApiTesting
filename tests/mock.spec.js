 const nock = require('nock');
 const request_ = require('supertest');
 const expect = require('chai').expect;
const { request } = require('../src/app');

 describe('mocked response', () => {
     beforeEach(() => {
         nock('http://localhost:4000').get('/users').reply(200, {
             "users": [{"id": "1"}]
         });
     });

     it("nock intercepts", () => {
         request_('http://localhost:4000').get('/users').end((error, response) => {
             expect(response.body.users[0].id).to.be.equal("1")
         });
     });
 });
