import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HelmetProvider} from "react-helmet-async";
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);
