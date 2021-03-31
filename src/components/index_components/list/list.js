import React, {Component} from 'react';
import Section3 from '../list_section3';
import Section5 from '../list_section5';

import './list.css';

export default class List extends Component {
    render() {
        return (
            <section className="list">
                <Section5/>
                <div className="list_section3_wrapper">
                    <Section3 trigger={true} number={1.5}/>
                    <Section3/>
                </div> 
                <Section5/>
            </section>  
        )  
    }
} 