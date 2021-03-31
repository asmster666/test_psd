import React, {Component} from 'react';
import {ActionPage, IndexPage} from '../../pages';
import {GeoModal} from '../header/modals/geo/geo_modal';

export default class App extends Component {
    render() {
        return (
            <section className="app">
                <GeoModal /> 
            </section>
        )
    }
}