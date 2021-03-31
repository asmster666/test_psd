import React, {Component} from 'react';
import Section3 from '../list_section3';
import Section5 from '../list_section5';

export default class List extends Component {
    render() {
        return (
            <section className="list">
                <Section5/> 
                <Section3/>
                <Section3/>
                <Section5/>
            </section>  
        )  
    }
} 