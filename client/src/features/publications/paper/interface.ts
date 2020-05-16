import { createModule } from 'typeless';
import { PaperSymbol } from './symbol';


export const [handle, PapersActions, getPapersState] = createModule(PaperSymbol)
  .withActions({
    $mounted: null,
    fetchBooksFulfilled: (books: PaperInfo[]) => ({payload: {books}})
  })
  .withState<PapersState>();

export interface PapersState{
  papers: PaperInfo[]
}

export interface PaperInfo {
  title: string,
  publisher: string,
  pubDate: string,
  author: string
}