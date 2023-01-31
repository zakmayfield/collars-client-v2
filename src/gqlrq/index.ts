import { GraphQLClient } from 'graphql-request';

export { gql } from 'graphql-request';

export const client = new GraphQLClient(
  'http://localhost:4000/graphql',
  {
    headers: {
      'authorization': 'abc.123'
    },
  }
);
