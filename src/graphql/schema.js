import { gql } from 'apollo-server';

const rootTypeDefinitions = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'hello',
  },
};

export const typeDefs = [rootTypeDefinitions];
export const resolvers = [rootResolvers];
