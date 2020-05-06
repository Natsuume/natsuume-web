import React from "react";
import { Router, Switch, RouteProps, Route } from "react-router-dom";
import { history } from "../utils/history";
import { PageDefinitions } from "../types/PageDefinitions";
import { BasePage } from "./pages/BasePage";
import { usePageChangeModule } from "../features/global/module"


export const Routes: React.FC = () => {
  usePageChangeModule();
  return (
    <Router history={history}>
      <Switch>
        {
          Object.values(PageDefinitions).map(({path, Component}, key) => {
            const base: RouteProps & {key: React.Key} = {
              key,
              exact: true,
              sensitive: true,
              path: path as string | string[]
            }

            return (
              <Route {...base}>
                <BasePage>
                  <Component></Component>
                </BasePage>
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  )
}