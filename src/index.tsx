import React from 'react';
import ReactDOM from 'react-dom';
import { Hmr, startHmr, DefaultTypelessProvider } from "typeless";
import App from './App';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById("root");

if(!MOUNT_NODE) {
  throw new Error('<div id="root" /> not found');
}
const render = () => {
  ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  ReactDOM.render(
    <Hmr>
      <DefaultTypelessProvider>
        <App></App>
      </DefaultTypelessProvider>
    </Hmr>,
    MOUNT_NODE,
  );
}

if(module.hot) {
  module.hot.accept("./App", () => {
    startHmr();
    render();
  })
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({});