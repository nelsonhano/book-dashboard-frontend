import { ApolloProvider } from "@apollo/client/react";
import { createApolloClient } from "../config/apollo";
import { useAuth0 } from "@auth0/auth0-react";

export const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  const { getAccessTokenSilently } = useAuth0();

  const client = createApolloClient(getAccessTokenSilently);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
