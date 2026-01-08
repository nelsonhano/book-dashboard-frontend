import { useMutation, useQuery } from "@apollo/client/react";
import { Table, Spinner, Button } from "@chakra-ui/react";
import { DELETE_BOOK, GET_BOOKS } from "../graphql/books";
import CreateBookModal from "./CreateBookModal";

export default function BookTable() {
    const [deleteBook, { loading: deleting }] = useMutation(DELETE_BOOK, {
        refetchQueries: [GET_BOOKS],
    });
    const { data, loading: fetching } = useQuery<GetBooksResponse>(GET_BOOKS);

    if (fetching) return <Spinner />;

    return (
        <>
            <CreateBookModal />

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
                                <Table.Cell>
                                    <Button
                                        disabled={deleting}
                                        colorScheme="red"
                                        size="sm"
                                        onClick={() => deleteBook({ variables: { id: book.id } })}
                                    >
                                        Delete {deleting && <Spinner />}
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    )}
                </Table.Body>
            </Table.Root>
        </>
    );
}
