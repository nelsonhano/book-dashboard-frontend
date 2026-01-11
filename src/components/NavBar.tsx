import { Box, Flex, Heading } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";

export default function NavBar() {
  return (
    <Box
      as="nav"
      width="450px"
      md={{ width: "800px" }}
      xl={{ width: "1400px" }}
      lg={{ width: "1100px" }}
      mx="auto"
      px={4}
      py={3}
    >
      <Flex align="center" justify="space-between">
        {/* Left */}
        <Heading size="md" color="white">
          Book Dashboard
        </Heading>

        {/* Right */}
        <AuthButtons />
      </Flex>
    </Box>
  );
}
