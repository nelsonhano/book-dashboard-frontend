import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API,
});
console.log({ msg: 'GraphQL API URI', httpLink });

export const createApolloClient = (getToken: () => Promise<string>) => {
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    console.log({ msg: 'Token gotten', token});
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
