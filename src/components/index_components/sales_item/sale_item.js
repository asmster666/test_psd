import React, {Component} from 'react';

import './sale_item.css';

export default class SaleItem extends Component {
    render() {
        return (
            <section className="sale_item">
                <div className="sale_item_pic"></div>
                <section className="sale_item_info">
                    <div className="sale_item_info_pic"></div>
                    <div className="sale_iten_left">
                        <div className="sale_item_name">Евросеть</div>
                        <div className="sale_item_details">10% спасибо за покупки в черную пятницу</div>
                    </div>   
                </section>
            </section> 
        )  
    }
}