import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query {
    books {
      id
      name
      description
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation ($name: String!, $description: String!) {
    createBook(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation ($id: Int!) {
    deleteBook(id: $id)
  }
`;
