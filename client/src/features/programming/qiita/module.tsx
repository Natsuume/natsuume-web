import React from "react";
import { QiitaState, handle, QiitaActions, QiitaArticle } from './interface';
import { myServerClient } from '../../../utils/axios';
import { Qiita } from "./component/Qiita";


const initialState: QiitaState = {
  articles: []
}

handle.epic()
  .on(QiitaActions.$mounted, async () => {
    const articles: QiitaArticle[] = await myServerClient.get<QiitaArticle[]>("/api/qiita")
      .then(response => response.data)

    return QiitaActions.fetchQiitaFulfilled(articles);
  });

handle.reducer(initialState)
  .on(QiitaActions.fetchQiitaFulfilled, (state, {articles}) => {
    state.articles = articles;
  })

export const QiitaModule: React.FC = () => {
  handle();

  return <Qiita></Qiita>
}