import loadable, { LoadableComponent } from "@loadable/component";

export const PageDefinitions = {
  index: {
    path: "/",
    pageName: "Home",
    Component: loadable(
      () => import("../components/pages/top/Home").then(m => ({default: m.Home})),
    ) as LoadableComponent<unknown>
  },
  publish: {
    path: "/publish",
    pageName: "Publications",
    Component: loadable(() => import("../components/pages/publications/Publications").then(m => (
      {default: m.Publications})),
    ) as LoadableComponent<unknown>
  },
  programming: {
    path: "/programming",
    pageName: "Programming",
    Component: loadable(
      () => import("../components/pages/programming/Programming").then(m => (
        {default: m.Programming})),
    ) as LoadableComponent<unknown>
  },
  hobby: {
    path: "/application",
    pageName: "Application",
    Component: loadable(() => import("../components/pages/application/Application").then(m => (
      {default: m.Hobby})),
    ) as LoadableComponent<unknown>
  },
}