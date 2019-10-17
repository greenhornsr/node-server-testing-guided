const request = require('supertest')
const HobbitDB = require('./hobbitsModel')
const db = require('../data/dbConfig');


it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('hobbits model', () => {
    // beforeAll()
    beforeEach(async () => {
        await db('hobbits').truncate()
    })
    // afterEach()
    // afterAll()


    describe('insert()', () => {
        it('should add a hobbit to database', async () => {
            const records = await db('hobbits');
            expect(records).toHaveLength(0)

            await HobbitDB.insert({name: 'Nicholas'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1)
        });

        it('should add the provided hobbit to database', async () => {
            let hobbit = await HobbitDB.insert({name: 'Nicholas'});
            expect(hobbit.name).toBe('Nicholas')

            hobbit = await HobbitDB.insert({name: 'frodo'});
            expect(hobbit.name).toBe('frodo')

            // Check we now have 2 records in the table
            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })
    });
})