import React from 'react';
import {Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import Carrinho from "./pages/carrinho"


export default () =>{

    return(
        <Switch>

            <Route exact path="/"  component={Home}>
            <Home />
            </Route>

            <Route exact path="/carrinho" component={Carrinho}>
                <Carrinho />

            </Route>

        </Switch>
    );

}
