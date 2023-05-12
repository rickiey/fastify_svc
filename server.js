// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    // Run the server!
    fastify.listen({ host: "0.0.0.0", port: 3000 }, function (err, address) {
        if (err) {
            fastify.log.error(err)
        }
        //
    })
}
start()