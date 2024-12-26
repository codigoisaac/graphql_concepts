import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: OrderEnum
    _start: Int
    _limit: Int
  }

  enum OrderEnum {
    ASC
    DESC
  }
`;
