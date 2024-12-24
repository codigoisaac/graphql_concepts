import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String
    }
  `,
  resolvers: {
    Query: {
      user: () => ({ id: '1', userName: 'Isaac Muniz' }),
      users: () => [
        { id: '1', userName: 'Isaac Muniz' },
        { id: '2', userName: 'Muniz Isaac' },
      ],
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
