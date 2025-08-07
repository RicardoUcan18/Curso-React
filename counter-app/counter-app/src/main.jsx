import React from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './HelloWorldApp.jsx'

import {FirstApp} from './FirstApp.jsx'

import './styles.css'  //estilos globales de la app
import { CounterApp } from './CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        <FirstApp/>

        <CounterApp value={ 10 } />
    </React.StrictMode>
);