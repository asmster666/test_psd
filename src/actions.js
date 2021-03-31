const get_partners = (data) => ({type: 'PARTNERS', payload: data});
const get_sales = (data) => ({type: 'SALES', payload: data});
const get_addresses = (data) => ({type: 'ADDRESSES', payload: data});

export {
    get_partners,
    get_sales,
    get_addresses,
};