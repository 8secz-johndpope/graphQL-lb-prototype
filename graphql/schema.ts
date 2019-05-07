const { makeExecutableSchema } = require('graphql-tools');

const loopbackRef = require('../server/server');

interface resolverObj {
  Query: any,
}

interface tripQuery {
  id: string
}

const typeDefs : string = `
  type Trip {
    id: ID
    from: String
    to: String
    planeImage: String
    passengers: [Passenger]
    destinations: [Destination]
  }

  type Passenger {
    id: ID
    name: String
    profileImage: String
  }

  type Destination {
    id: ID
    coverImage: String
    weather: String
    location: String
    date: String
  }

  type Query {
    trips: [Trip]
    trip(id: ID!): Trip
  }

  #specify RootQuery and RootMutation
  schema {
    query: Query
  }
`;

const resolvers : resolverObj = {
  Query: {
    trips: async () => {
      // console.log(loopbackRef.app.models);
      return await loopbackRef.models.Trip.find();
    },
    trip: async (_root: any, { id }: tripQuery) => {
      return await loopbackRef.models.Trip.findById(id);
    }
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});