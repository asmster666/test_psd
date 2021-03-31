import React from 'react';
import './geo.css';

export const GeoModal = () => {
    return(
        <section className="geo_modal">
            <p>Ваш город - Санкт-Петербург?</p>
            <div className="geo_modal_wrap">
                <button id="active_geo">Да</button>
                <button className="change_city_btn">Сменить город</button> 
            </div>
        </section>
    )
}