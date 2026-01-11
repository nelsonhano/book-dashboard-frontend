import { useQuery, useMutation } from "@apollo/client/react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Textarea,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { GET_BOOK, UPDATE_BOOK } from "../graphql/books";

type Book = {
  id: string;
  name: string;
  description: string;
};

type GetBookResponse = {
  book: Book;
};

// -------------------------
// UpdateBookModal Component
// -------------------------
export default function UpdateBookModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch the book to edit
  const { data, loading: fetching } = useQuery<GetBookResponse>(GET_BOOK, {
    variables: { id },
  });

  // Lazy state initialization from query
  const initialBook = useMemo(() => data?.book, [data?.book]);
  
  const [name, setName] = useState(initialBook?.name);
  console.log(name);
  
  const [description, setDescription] = useState(
    initialBook?.description);
  console.log(description);
  

  // Update book mutation
  const [updateBook, { loading: updating }] = useMutation(UPDATE_BOOK, {
    refetchQueries: ["GetBooks"], // or the query you use in Dashboard
  });

  // Show spinner while fetching book
  if (fetching) return <Spinner size="xl" display="block" mx="auto" mt={10} />;

  // Handle update
  const handleSubmit = async () => {
    if (!id) return;

    await updateBook({
      variables: {
        id: id,
        name,
        description,
      },
    });

    navigate("/"); // redirect to dashboard
  };



  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} bg="gray.50" borderRadius="md">
      <Heading size="md" mb={4}>
        Edit Book
      </Heading>

      <Input
        color="black"
        placeholder="Book Name"
        mb={3}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        color="black"
        placeholder="Description"
        mb={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button colorScheme="blue" onClick={handleSubmit} loading={updating}>
        Update Book
      </Button>
    </Box>
  );
}
