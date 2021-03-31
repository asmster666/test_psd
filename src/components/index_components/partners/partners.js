import React, {Component} from 'react';
import PartnerItem from '../partner_item';

import './partners.css';

export default class Partners extends Component {
    render() {
        return (
            <section className="partners">
                <div className="partners_wrap">
                    <PartnerItem/>
                    <PartnerItem/>
                    <PartnerItem/>
                    <PartnerItem/>
                    <PartnerItem/>
                </div>
                <button>Еще 4 партнера</button>
            </section>
        )  
    }
}