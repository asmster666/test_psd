import React from 'react';
import './search.css';

export const SearchModal = () => {
    return(
        <section className="search_modal">
            <label>
                <input type="text" placeholder="Поиск..."></input>
            </label>
            <div className="sign_search"></div>
        </section>
    )
}