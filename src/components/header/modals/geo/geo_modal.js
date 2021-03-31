import React from 'react';
import './geo.css';

export const GeoModal = () => {
    return(
        <section className="geo_modal">
            <p>Ваш город - Санкт-Петербург?</p>
            <div className="geo_modal_wrap">
                <button className="active">Да</button>
                <button>Сменить город</button>
            </div>
        </section>
    )
}