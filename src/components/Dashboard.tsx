import { Box, Heading } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import BookTable from "./BookTable";
import NavBar from "./NavBar";

export default function Dashboard() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <NavBar />
        <Box p={6} w="100%">
          <Heading mb={4}>
            <h2>Welcome back, kindly login to get the best experience</h2>
          </Heading>
          {isAuthenticated && <BookTable />}
        </Box>
      </div>
    </>
  );
}
