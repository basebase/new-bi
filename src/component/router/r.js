/**
 * Created by Joker on 18/12/15.
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../app/index";
import Demo from '../../pages/demo'
import Demo2 from '../../pages/demo2'

export default class R extends React.Component {
    render() {
        console.log("Go Router")
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Demo} />
                        <Route path="/test/a" component={Demo2} />
                    </Switch>
                </App>
            </Router>
        )
    }
}