import { ApolloProvider } from "@apollo/client/react";
import { createApolloClient } from "../config/apollo";
import { useAuth0 } from "@auth0/auth0-react";
import type { ReactNode } from "react";

export const ApolloWrapper = ({ children }: { children: ReactNode }) => {
  const { getAccessTokenSilently } = useAuth0();
  const client = createApolloClient(getAccessTokenSilently);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
