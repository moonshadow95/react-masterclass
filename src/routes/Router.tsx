import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/:coinId' element={<Coin/>}>
                <Route path='chart' element={<Chart/>}/>
                <Route path='price' element={<Price/>}/>
            </Route>
            <Route path='/' element={<Coins/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;