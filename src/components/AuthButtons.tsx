import { Button, HStack } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <HStack>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <Button onClick={() => logout()}>Logout</Button>
      )}
    </HStack>
  );
}
