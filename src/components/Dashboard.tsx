import { Box, Heading } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButtons from "../components/AuthButtons";
import BookTable from "./BookTable";

export default function Dashboard() {
  const { isAuthenticated } = useAuth0();

  return (
    <Box p={6}>
      <Heading mb={4}>Book Dashboard</Heading>
      <AuthButtons />
      {isAuthenticated && <BookTable />}
    </Box>
  );
}
