import React, {Component} from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import InfoField from '../components/action_components/info_field';
import MapField from '../components/action_components/map';

import './styles.css';

export default class ActionPage extends Component {
    render() {
        return (
            <section className="action_page">
                <Header/>
                <section className="action_main">
                    <a href="./action_page.js" className="action_main_link">Скидочные купоны · Развлечения</a>
                    <h1>Apple Music за СПАСИБО</h1>
                    <section className="action_external">
                        <InfoField/>
                        <MapField />
                    </section>
                </section> 
                <Footer/>
            </section>
        ) 
    }
}