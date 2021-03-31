const initialState = {
    partners: [],
    sales: [],
    addresses: []
} 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PARTNERS' :
            return {
                ...state,
                weight: action.payload
            };
        case 'SALES' :
            return {
                ...state,
                activity: action.payload
            };
        case 'ADDRESSES' :
            return {
                ...state,
                sex: action.payload
            };
        default:
            return state;
    }
}

export default reducer;