const app = require('./index')
const chai = require('chai');

const expect = chai.expect;

const request = require('supertest')
chai.should()

describe('KYC LOGIN', () => {
    it('returns a customer with id = 1', (done)=>{
        request(app).post('localhost:3000/login')
        .send({
            "id":"1",
            "username":"wesly",
            "password":"zazaz"
        }).set("Authorization", `Bearer ${token}`)
        .end((res, req)=>{
            if (err) return done(err);
            // should.exist(res.body);
            let user = res.body.data.customer)

            expect(user.id).to.be.a('int');            
            expect(user.username).to.be.a('string');
            expect(user.password).to.be.a('string'); 
        })
    })
})

describe('KYC Create user', () => {
    it('returns a customer with id = 1', (done)=>{
        request(app).post('localhost:3000/register')
        .send({
            "id":"1",
            "username":"wesly",
            "email":"w@gmail.com",
            "password":"zazaz"
        }).set("Authorization", `Bearer ${token}`)
        .end((res, req)=>{
            if (err) return done(err);
            // should.exist(res.body);
            let user = res.body.data.customer)

            expect(user.id).to.be.a('int');            
            expect(user.username).to.be.a('string');
            expect(user.email).to.be.a('string'); 
            expect(user.password).to.be.a('string'); 
        })
    })
})