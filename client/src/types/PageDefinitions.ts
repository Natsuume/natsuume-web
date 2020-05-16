import { TopPageContents, PublicationsPageContents, ProgrammingPageContents, PageContent, ApplicationsPageContents } from './PageContent';

type pages =
  | "index"
  | "publications"
  | "programming"
  | "applications";

export const PageDefinitions: {[key in pages]: PageDefinition} = {
  index: {
    path: "/",
    pageName: "Home",
    contents: TopPageContents
  },
  publications: {
    path: "/publications",
    pageName: "Publications",
    contents: PublicationsPageContents
  },
  programming: {
    path: "/programming",
    pageName: "Programming",
    contents: ProgrammingPageContents
  },
  applications: {
    path: "/applications",
    pageName: "Applications",
    contents: ApplicationsPageContents
  },
}

export interface PageDefinition {
  path: string,
  pageName: string,
  contents: PageContent[]
}