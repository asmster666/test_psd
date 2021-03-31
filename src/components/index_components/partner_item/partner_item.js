import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_partners} from '../../../actions';
import './partner_item.css';

class PartnerItem extends Component {

    componentDidMount() {
        //let serverResponse = {...some data}
        //this.props.get_partners(serverResponse);
    }

    render() {
        return (
            <section className="partner_item">
                <div className="partner_procent">1.5%</div>
                <p className="partner_text">Спасибо от суммы покупки</p>
                <div className="partner_pic"></div>
                <div className="partner_name">Евросеть</div>
            </section> 
        )  
    }
}  

const mapStateToProps = (state) => {
    return {
        partners: state.partners
    }
};

export default connect(mapStateToProps, {get_partners})(PartnerItem);