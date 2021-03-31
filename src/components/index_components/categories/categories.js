import React, {Component} from 'react';

import './categories.css';

export default class Categories extends Component {
    render() {
        return (
            <section className="categories">
                <div className="categories_wrap">
                    <section className="categoires_up">
                        <div className="category">Все партнеры</div>
                        <div className="category">Популярные</div>
                        <div className="category">Супермаркеты</div>
                        <div className="category">Кафе и рестораны</div>
                        <div className="category">Такси</div>
                        <div className="category">Красота</div>
                    </section>
                    <section className="categoires_down">
                        <div className="category" id="active">Электроника и бытовая техника</div>
                        <div className="category">Зоотовары</div>
                        <div className="category">Кино и театр</div>
                        <button className="categories_btn">• • •</button>
                    </section>
                </div>
                <section className="toggle">
                    <div className="toggle_1">Начисляют спасибо</div>
                    <label className="toggle_btn">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                    </label>
                    <div className="toggle_2">Принимают спасибо</div>
                </section>
            </section> 
        ) 
    }
}