/**
 * Created by Joker on 18/12/15.
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../app/index";
import SearchForm from '../frame/SearchForm'

export default class R extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={ SearchForm } />
                    </Switch>
                </App>
            </Router>
        )
    }
}