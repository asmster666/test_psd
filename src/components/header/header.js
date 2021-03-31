import React, {Component} from 'react';
import {GeoModal} from './modals/geo/geo_modal';
import {SearchModal} from './modals/search/search_modal';
import './header.css';

export default class Header extends Component {

    showModal = (elem) => {
        let modal = document.getElementById(`${elem}`);
        modal.style.display = "block";
    }

    render() {
        return (
            <section className="header"> 
                <section className="right">
                    <div id="img"></div>
                </section>
                <section className="links">
                    <div className="links_up">                     
                        <a href="./header.js">Купоны и сертификаты</a>
                        <a href="./header.js">Впечатления</a>
                        <a href="./header.js">Авиабилеты</a>
                        <a href="./header.js">Ж/д билеты</a>
                        <a href="./header.js">Отели</a>
                    </div>
                    <div className="links_down_wrap">
                        <div className="links_down">             
                            <a href="./header.js">Каршеринг</a>
                            <a href="./header.js">Театры</a>
                            <a href="./header.js">Страхование</a>
                            <a href="./header.js">Как подключиться</a>
                        </div>  
                        <a href='./header.js' className="partners_link">Партнеры</a>
                    </div>
                </section>
                <section className="left">
                    <div className="location">
                        <div className="geo" onClick={() => this.showModal("modal_geo")}></div>
                        <span>Санкт-Петербург</span>
                    </div>
                    <div className="search">
                        <div className="search_icon" onClick={() => this.showModal("modal_search")}></div>
                        <button>Войти</button>
                    </div>
                </section>
                <section id="modal_geo">
                    <GeoModal />
                </section>
                <section id="modal_search">
                    <SearchModal />
                </section>
                <section className="links_none">
                    <div className="menu_icon"></div>
                </section>
            </section> 
        )  
    }
}    