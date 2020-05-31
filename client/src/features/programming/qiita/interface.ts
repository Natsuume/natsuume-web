import { createModule } from 'typeless';
import { QiitaSymbol } from './symbol';
export const [handle, QiitaActions, getQiitaState] = createModule(QiitaSymbol)
  .withActions({
    $mounted: null,
    fetchQiitaFulfilled: (articles: QiitaArticle[]) => ({payload: {articles}})
  })
  .withState<QiitaState>();

export interface QiitaState{
  articles: QiitaArticle[]
}

export interface QiitaArticle {
  title: string,
  url: string,
  tags: string[],
  lgtmCount: number,
  createdDate: string
}