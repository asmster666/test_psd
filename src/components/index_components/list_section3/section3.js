import React, {Component} from 'react';
import './section3.css';

export default class Section3 extends Component {

    componentDidMount() {
        this.getSaleSign(this.props.trigger, this.props.number);
    }

    getSaleSign = (trigger, number) => {
        if(trigger) {
            let wrapper = document.querySelector(".section3_wrap");
            for(let kid of wrapper.children) {
                let sign = document.createElement("div");
                sign.innerHTML = `
                    <div className="sign_num">${number}</div>
                `;
                sign.classList.add("sale_sign");
                kid.appendChild(sign);
            }
        }
    }

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