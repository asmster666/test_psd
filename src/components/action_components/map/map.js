import React, {Component} from 'react';
import AddressItem from '../address_item';
import './map.css';

export default class MapField extends Component {
    render() {
        return (
            <section className="map_field">
                <section className="map_field_up">
                    <div className="map_field_up_logo"></div>
                    <h1>Apple Music</h1>
                </section>
                <section className="map_field_addresses">
                    <AddressItem />
                    <AddressItem /> 
                    <AddressItem />
                </section>
                <div className="map_field_gps"></div> 
            </section> 
        )  
    }
}   