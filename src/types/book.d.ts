interface Book {
  id: string;
  name: string;
  description: string;
}

interface GetBooksResponse {
  books: Book[];
}
