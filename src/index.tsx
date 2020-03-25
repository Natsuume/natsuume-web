import React from "react";
import ReactDOM from 'react-dom';
import { DefaultTypelessProvider, Hmr, startHmr } from "typeless";

const MOUNT_NODE = document.getElementById("app");

if (!MOUNT_NODE) {
  throw new Error('<div id="root" /> not found');
}

const render = () => {
  const App: HTMLElement = require("./components/App").App;
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  ReactDOM.render(
    <Hmr>
      <DefaultTypelessProvider>
        <App />
      </DefaultTypelessProvider>
    </Hmr>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept("./components/App", () => {
    startHmr();
    render()
  })
}
render();