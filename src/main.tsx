import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

import App from './App.tsx';
import './index.css';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
    >
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </StrictMode>
);
