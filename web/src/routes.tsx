import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CadVendedor from './pages/CadVendedor';
import CadProduto from './pages/CadProduto';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CadVendedor} path="/cadVendedor"/>
            <Route component={CadProduto} path="/cadProduto"/>         
        </BrowserRouter>
    )
}

export default Routes;