import React, {Component} from 'react';
import SaleItem from '../sales_item';

import './sales.css';

export default class Sales extends Component {
    render() {
        return (
            <section className="sales">
                <h1>3 предложения в категории «Электроника и бытовая техника»</h1>
                <section className='sales_wrap'>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/> 
                </section>
                <button>Еще 4 предложения</button>
            </section> 
        )  
    }
}