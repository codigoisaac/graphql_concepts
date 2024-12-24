import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      height: Float
      isAwesome: Boolean
    }
  `,
  resolvers: {
    Query: {
      id: () => '0',
      name: () => 'Isaac',
      age: () => 26,
      height: () => 1.78,
      isAwesome: () => true,
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
