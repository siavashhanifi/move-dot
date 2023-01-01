import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './view/Content';
import reportWebVitals from './reportWebVitals';
import { DotPosition } from './model/DotPosition';
import { Controller } from './controller/Controller';
import { BackendCommunicator } from './network/BackendCommunicator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

var        backendCommunicator: BackendCommunicator = new BackendCommunicator("localhost", 8080);
var        dotPosition:         DotPosition         = new DotPosition();
export var controller:          Controller          = new Controller(backendCommunicator, dotPosition);

controller.pollForCurrentDotPosition(100);

root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
