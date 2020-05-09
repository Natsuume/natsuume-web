import loadable, { LoadableComponent } from '@loadable/component';

export const TopPageContents = [
    {
      topic: "about",
      Component: loadable(() => import("../../features/top/profile/module").then(
        m => ({default: m.ProfileModule})
      )) as LoadableComponent<unknown>
    },
    {
      topic: "information",
      Component: loadable(() => import("../../features/top/information/module").then(
        m => ({default: m.InformationModule})
      )) as LoadableComponent<unknown>
    },
    {
      topic: "contact",
      Component: loadable(() => import("../../components/pages/top/Contact").then(
        m => ({default: m.Contact})
      )) as LoadableComponent<unknown>
    },
  ]