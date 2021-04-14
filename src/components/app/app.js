import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ActionPage, IndexPage} from '../../pages';

export default class App extends Component {
    render() {
        return (
            <Router>
                <section className="app">
                    <Switch>
                        <Route path="/" exact component={IndexPage}></Route>
                        <Route path="/action" exact component={ActionPage}></Route>
                    </Switch>
                </section>
            </Router>
        )
    }
}