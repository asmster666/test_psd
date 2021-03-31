import React, {Component} from 'react';
import './section3.css';

export default class Section3 extends Component {
    render() {
        return (
            <section className="section3">
                <div className="section3_wrap">
                    <div className="section3_first item"></div>
                    <div className="section3_second item"></div>
                    <div className="section3_third item"></div>
                </div>
                <div className="section3_name">
                    <div className="section3_name_text">Большой % начисления</div>
                </div>
            </section>  
        )  
    }
} 