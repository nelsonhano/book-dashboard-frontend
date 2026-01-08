import { Button, Dialog, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CREATE_BOOK, GET_BOOKS } from "../graphql/books";
import { useMutation } from "@apollo/client/react";

export default function CreateBookModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [createBook, { loading }] = useMutation(CREATE_BOOK, {
    refetchQueries: [GET_BOOKS],
    onCompleted: () => {
      setName("");
      setDescription("");
    },
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button colorScheme="blue">Add Book</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>Create Book</Dialog.Header>

        <Dialog.Body>
          <VStack gap={4}>
            <Input
              placeholder="Book name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </VStack>
        </Dialog.Body>

        <Dialog.Footer>
          <Button
            colorScheme="blue"
            loading={loading}
            onClick={() => createBook({ variables: { name, description } })}
          >
            Save
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
