import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_ENDPOINT,
  cache: new InMemoryCache(),
});

export {
  client
}
