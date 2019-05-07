const { ApolloServer } = require('apollo-server-express');

interface gqlOptions {
  typeDefs: any | any[],
  resolvers: any,
  context(obj: any): any | undefined | null,
  playground: boolean | undefined | null
}

interface middlewareOptions {
  app: any,
  path: string,
}

module.exports = function createApolloServer(options: gqlOptions, applyMiddlewareOptions: middlewareOptions) {
  const server = new ApolloServer(options);
  server.applyMiddleware(applyMiddlewareOptions);
};