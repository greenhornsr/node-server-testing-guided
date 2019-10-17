//importing supertest    supertest info: https://github.com/visionmedia/supertest
const request = require('supertest');

// importing server.js
const server = require('./server');

// GET TEST
// should return 200 ok
//  IMPORTANT!!  WHEN TESTING ASYNCHRONOUS CODE, YOU MUST TELL JEST TO WAIT!!  THE EASIEST WAY TO DO THAT...RETURN THE CALL.  i.e. line 12
describe('Get /', () => {
    it(`should return http 200 status code`, () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);  
        })
    });

    // should return json
    // async / await version of testing; alternative to the return option.
    it('should return JSON', async() => {
        const response = await request(server)
        .get('/')
        // toMatch uses a regex (regular expression) to check the value
        expect(response.type).toMatch(/json/i)
    });

    // should return an object with an api property including the value of 'up'
    it('should return {api: "up"}', async () => {
        const response = await request(server)
        .get('/')
        expect(response.body).toEqual({api: "up"});
        expect(response.body.api).toBe("up");
    })
})