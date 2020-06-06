import React from 'react';
import { Route, BrowserRouter }  from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            {
            /* Routes stops the lookup if the current path 'exists
            on the path prop. So for example /create exists in /
            thus Home is returned. 
            'exact' prop will make it look for the exact path */}
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );
};

export default Routes;