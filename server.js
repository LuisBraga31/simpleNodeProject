import { fastify } from 'fastify';
import { DataBaseMemory } from './database-memory.js';

const server = fastify()

const database = new DataBaseMemory();

server.post('/videos', (request, reply) => {

    const {title, description, duration} = request.body;
    
    database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()
    return videos
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