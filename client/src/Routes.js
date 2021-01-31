import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Register from "./Register/Register";
import Groups from "./Groups/Groups";
import About from "./About/About";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Groups" component={Groups} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        )
    }
}