import { ApolloProvider } from "@apollo/client/react";
import { createApolloClient } from "../config/apollo";
import { useAuth0 } from "@auth0/auth0-react";
import { useMemo, type ReactNode } from "react";

export const ApolloWrapper = ({ children }: { children: ReactNode }) => {
  const { getAccessTokenSilently } = useAuth0();
  
  const client = useMemo(() => {
    return createApolloClient(getAccessTokenSilently);
  }, [getAccessTokenSilently]);
  
  console.log({ msg: 'ApolloWrapper render client', client });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
