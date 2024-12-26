import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolver';
import { postTypeDefs } from './post/typedefs';
import { postResolvers } from './post/resolver';
import { apiFiltersTypeDefs } from './api-filters/typedefs';
import { apiFiltersResolvers } from './api-filters/resolvers';

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

export const typeDefs = [
  rootTypeDefinitions,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
