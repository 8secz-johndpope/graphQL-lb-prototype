var ApolloServer = require('apollo-server-express').ApolloServer;
module.exports = function createApolloServer(options, applyMiddlewareOptions) {
    var server = new ApolloServer(options);
    server.applyMiddleware(applyMiddlewareOptions);
};
//# sourceMappingURL=attachApolloServer.js.map