import React, {Component} from 'react';
import {ActionPage, IndexPage} from '../../pages';
import Section3 from '../index_components/list_section3';

export default class App extends Component {
    render() {
        return (
            <section className="app">
                <IndexPage /> 
            </section>
        )
    }
}