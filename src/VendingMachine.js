import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import Machine from './Machine';

const VendingMachine = () => {
     return (
        <BrowserRouter>
            <Navbar/>
            <Route exact path="/soda">
                <Soda/>
            </Route>
            <Route exact path="/chips">
                <Chips/>
            </Route>
            <Route exact path="/fresh-sardines">
                <FreshSardines/>
            </Route>
            <Route exact path='/'>
                <Machine/>
            </Route>
        </BrowserRouter>
    );
}

export default VendingMachine;