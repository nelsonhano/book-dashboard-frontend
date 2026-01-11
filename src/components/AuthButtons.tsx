import { HStack } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthButtons() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return null;

  console.log(isAuthenticated);
  return (
    <HStack>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</HStack>
  );
}
