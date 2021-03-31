import React, {Component} from 'react';
import './partner_item.css';

export default class PartnerItem extends Component {
    render() {
        return (
            <section className="partner_item">
                <div className="partner_procent">1.5%</div>
                <p className="partner_text">Спасибо от суммы покупки</p>
                <div className="partner_pic"></div>
                <div className="partner_name">Евросеть</div>
            </section> 
        )  
    }
}  