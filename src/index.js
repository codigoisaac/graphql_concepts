import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hiThere: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello, GraphQL!',
      hiThere: () => 'Hi there!',
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
