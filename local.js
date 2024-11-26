const { ApolloServer } = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');
const resolvers = require('project/resolvers/matrixResolver');
const { typeDefs } = require('project/graphql/typeDefs');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        pubSub: new PubSub(),
    }),
    introspection: true, // Enable introspection for local development
    playground: true,
    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true,
    },
    formatError: (err) => {
        console.error(err);
        return err;
    },
});

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}).catch(err => {
    console.error('Error starting server:', err);
});