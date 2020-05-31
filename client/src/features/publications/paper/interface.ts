import { createModule } from 'typeless';
import { PaperSymbol } from './symbol';


export const [handle, PapersActions, getPapersState] = createModule(PaperSymbol)
  .withActions({
    $mounted: null,
    fetchPapersFulfilled: (papers: PaperInfo[]) => ({payload: {papers}})
  })
  .withState<PapersState>();

export interface PapersState{
  papers: PaperInfo[]
}

export interface PaperInfo {
  title: string,
  author: string,
  media: string,
  year: string,
}