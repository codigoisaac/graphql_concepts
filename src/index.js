import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ fetch }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
