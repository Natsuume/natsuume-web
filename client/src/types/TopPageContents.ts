import loadable, { LoadableComponent } from '@loadable/component';

export const TopPageContents = [
    {
      topic: "about",
      Component: loadable(() => import("../components/pages/top/Profile").then(
        m => ({default: m.Profile})
      )) as LoadableComponent<unknown>
    },
    {
      topic: "information",
      Component: loadable(() => import("../components/pages/top/Information").then(
        m => ({default: m.Information})
      )) as LoadableComponent<unknown>
    },
    {
      topic: "activities",
      Component: loadable(() => import("../components/pages/top/Activities").then(
        m => ({default: m.Activities})
      )) as LoadableComponent<unknown>
    },
    {
      topic: "contact",
      Component: loadable(() => import("../components/pages/top/Profile").then(
        m => ({default: m.Profile})
      )) as LoadableComponent<unknown>
    },
  ]