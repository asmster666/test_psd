import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <section className="footer_up">
                    <section className="part900">
                        <p className="part900_text1">900</p>
                        <div className="part900_text2">По России бесплатно</div>
                    </section>
                    <section className="footer_links">
                        <a href="./header.js">Купоны и сертификаты</a>
                        <a href="./header.js">Впечатления</a>
                        <a href="./header.js">Авиабилеты</a>
                        <a href="./header.js">Ж/д билеты</a>
                        <a href="./header.js">Отели</a>
                        <a href="./header.js">Каршеринг</a>
                        <a href="./header.js">Театры</a>
                        <a href="./header.js">Страхование</a>
                        <a href="./header.js">Как подключиться</a>
                        <a href='./header.js'>Партнеры</a>
                    </section>
                </section>
                <section className="footer_center">
                    <div className="sber"></div>
                    <section className="center_center">
                        <div className="google_play"></div>
                        <div className="app_store"></div>
                    </section>
                    <section className="center_left">
                        <div className="ok"></div>
                        <div className="fb"></div>
                        <div className="vk"></div>
                        <div className="insta"></div>
                    </section>
                </section>
                <section className="footer_down">
                    <div className="down_text_left">© 1997—2019 ПАО Сбербанк.</div>
                    <div className="down_text_right">
                    Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»
                    </div>
                </section>
            </section>
        ) 
    }
}