import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolver';

const rootTypeDefinitions = gql`
  type Query {
    _root: String
  }
`;

const rootResolvers = {
  Query: {
    _root: () => 'ok',
  },
};

export const typeDefs = [rootTypeDefinitions, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
