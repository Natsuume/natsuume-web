import loadable, { LoadableComponent } from "@loadable/component";

export interface PageContent {
  topic: string,
  Component: LoadableComponent<unknown>
}

export const TopPageContents: PageContent[] = [
  {
    topic: "about",
    Component: loadable(() => import("../components/pages/top/Profile").then(
      m => ({default: m.Profile})
    )) as LoadableComponent<unknown>
  },
  {
    topic: "information",
    Component: loadable(() => import("../features/top/information/module").then(
      m => ({default: m.InformationModule})
    )) as LoadableComponent<unknown>
  },
  {
    topic: "contact",
    Component: loadable(() => import("../components/pages/top/Contact").then(
      m => ({default: m.Contact})
    )) as LoadableComponent<unknown>
  },
]

export const PublicationsPageContents: PageContent[] = [
  {
    topic: "Books",
    Component: loadable(() => import("../features/publications/book/module").then(
      m => ({default: m.BooksModule})
    )) as LoadableComponent<unknown>
  },
]

export const ProgrammingPageContents: PageContent[] = [
  {
    topic: "GitHub",
    Component: loadable(() => import("../features/programming/github/module").then(
      m => ({default: m.GitHubModule})
    )) as LoadableComponent<unknown>
  },
]

export const ApplicationsPageContents: PageContent[] = [
]