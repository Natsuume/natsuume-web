import { createModule } from 'typeless';
import { BookSymbol } from './symbol';


export const [handle, BooksActions, getBooksState] = createModule(BookSymbol)
  .withActions({
    $mounted: null,
    fetchBooksFulfilled: (books: BookSummary[]) => ({payload: {books}})
  })
  .withState<BooksState>();

export interface BooksState{
  books: BookSummary[]
}

export interface BookSummary {
  isbn: string,
  title: string,
  volume: string,
  series: string,
  publisher: string,
  pubdate: string,
  cover: string,
  author: string
}