import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/:coinId' element={<Coin/>}/>
            <Route path='/' element={<Coins/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;