import {HttpLink} from '@apollo/client';

export function createHttpLink() {
  return new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  });
}
