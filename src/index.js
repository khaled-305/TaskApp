import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
{id: "todo-0", name: "Eat", completed: true},
{id: "todo-1", name: "Code", completed: false},
{id: "todo-2", name: "Chat", completed: false}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />,
  </React.StrictMode>,
  document.getElementById('root')
);
