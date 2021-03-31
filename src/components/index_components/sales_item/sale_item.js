import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_sales} from '../../../actions';

import './sale_item.css';

class SaleItem extends Component {

    componentDidMount() {
        //let serverResponse = {...some data}
        //this.props.get_sales(serverResponse);
    }

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

const mapStateToProps = (state) => {
    return {
        sales: state.sales
    }
};

export default connect(mapStateToProps, {get_sales})(SaleItem);