import React, {Component} from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Categories from '../components/index_components/categories';
import Partners from '../components/index_components/partners';
import Sales from '../components/index_components/sales';
import List from '../components/index_components/list';

export default class IndexPage extends Component {
    render() {
        return (
            <section className="index_page">
                <Header/>
                <section className="main_field"> 
                    <h1>Партнеры и предложения</h1> 
                    <Categories/>
                    <Partners/>
                    <Sales/>
                    <List/>
                </section> 
                <Footer/>
            </section>
        )
    }
}