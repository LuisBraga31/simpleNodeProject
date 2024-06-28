import { fastify } from 'fastify';
import { DataBaseMemory } from './database-memory.js';

const server = fastify()

const database = new DataBaseMemory();

server.post('/videos', (request, reply) => {
    database.create({
        title: 'Video 01',
        desc: 'Esse é o video 01',
        duration: 180
    })
    console.log(database.list());
    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'HELLO WORD'
    
})

server.put('/videos/:id', () => {
    return 'Update Video'
})

server.delete('/videos/:id', () => {
    return 'Delete Video'
})

server.listen({
    port: 3000,
})