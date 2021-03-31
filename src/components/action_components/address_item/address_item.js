import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_addresses} from '../../../actions';

import './address_item.css';

class AddressItem extends Component {

    componentDidMount() {
        //let serverResponse = {...some data}
        //this.props.get_addresses(serverResponse);
    }

    render() {
        return (
            <section className="address_item">
                <div className="address_left_side">
                    <div className="address_left_side_img"></div>
                </div>
                <div className="address_right_side">
                    <p className="address_right_side_city">Москва, ул. Большая Татарская, 21</p>
                    <div className="address_right_side_trains"> 
                        <div className="train_icon1"></div>
                        <p className="train_name1">Маяковская</p>
                        <div className="train_icon2"></div>
                        <p className="train_name2">Лубянка</p>
                    </div>
                    <p className="address_right_side_phone">+7 495 220-30-44</p>
                    <p className="address_right_side_schedule">Ежедневно с 09:00 до 21:00</p>
                    <div className="address_item_links">
                        <a href="https://apple.com" className="apple">apple.com</a>
                        <a href="./adress_item.js" className="route">Проложить маршрут</a>
                    </div>
                    

                </div>
            </section> 
        )  
    }
};

const mapStateToProps = (state) => {
    return {
        addresses: state.addresses
    }
};

export default connect(mapStateToProps, {get_addresses})(AddressItem);