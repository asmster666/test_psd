import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {ActionPage, IndexPage} from '../../pages';

export default class App extends Component {
    render() {
        return (
            <Router>
                <section className="app">
                    <Switch>
                        <Route to="/action" component={IndexPage} />
                        <Route to="/" component={ActionPage} />
                    </Switch>   
                </section>
            </Router>
        )
    }
}