import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';

import {
  ChakraProvider,
} from "@chakra-ui/react"

import App from './App.tsx';
import './index.css';
import { system } from './theme.ts';

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    }}
    cacheLocation="memory"
    useRefreshTokens={false}
    onRedirectCallback={(appState) => {
      window.history.replaceState(
        {},
        document.title,
        appState?.returnTo || "/"
      );
    }}
  >
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </Auth0Provider>
);
