import React from "react";
import { BooksState, handle, BooksActions, BookSummary } from './interface';
import { openbdClient, myServerClient } from '../../../utils/axios';
import { Books } from "./component/Books";

const initialState: BooksState = {
  books: []
};

handle.epic()
  .on(BooksActions.$mounted, async () => {
    const books: BookSummary[] = await myServerClient.get<{isbn: string}[]>("/api/book")
      .then(response => response.data)
      .then(booksIsbn => Promise.all(booksIsbn.map(({isbn}) => openbdClient.get(
        "https://api.openbd.jp/v1/get",
        {params: {isbn}})
        .then<BookSummary>(response => response.data[0].summary))
      ))

    return BooksActions.fetchBooksFulfilled(books);
  })

handle.reducer(initialState)
  .on(BooksActions.fetchBooksFulfilled, ((state, {books}) => {
    state.books = books;
  }))


export const BooksModule: React.FC = () => {
  handle();

  return <Books></Books>
}