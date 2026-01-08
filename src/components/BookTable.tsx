import { useQuery } from "@apollo/client/react";
import { Table, Spinner } from "@chakra-ui/react";
import { GET_BOOKS } from "../graphql/books";

export default function BookTable() {
  const { data, loading } = useQuery<GetBooksResponse>(GET_BOOKS);

  if (loading) return <Spinner />;

  return (
    <Table.Root mt={6}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data?.books.map(
          (book: { id: string; name: string; description: string }) => (
            <Table.Row key={book.id}>
              <Table.Cell>{book.name}</Table.Cell>
              <Table.Cell>{book.description}</Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table.Root>
  );
}
