import React from 'react';
import './search.css';

export const SearchModal = () => {
    return(
        <section className="search_modal">
            <label className="search_label">
                <input type="text" placeholder="Поиск"></input>
            </label>
            <div className="sign_search"></div>
        </section>
    )
}