import React from "react";
import { Router, Switch, RouteProps, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Pages } from './pages/Pages';

const RoutePages: React.FC = () =>{
  return (
    <Switch>
      {Object.values(Pages).map(({path, Component}, key) => {
        const base: RouteProps & { key: React.Key } = {
          key,
          exact: true,
          sensitive: true,
          path: path as string
        };

        return (
          <Route {...base}>
            {Component}
          </Route>
        );
      })}
    </Switch>
  );
}

export const Routes: React.FC = () => {
  return (
    <Router history={createBrowserHistory()}>
      <RoutePages></RoutePages>
    </Router>
  )
};
