import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './HolaMundoApp';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={1} />
    {/* <FirstApp titulo='Mi primera' subtitulo='appa'/> */}
  </React.StrictMode>
);