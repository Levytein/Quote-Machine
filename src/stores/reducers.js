import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
}
from './actions';

const initialState = {
    loading:false,
    quote:{},
    error:'',
};

const quoteReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_QUOTE_REQUEST:
            return {
                ...state,
                loading:true,
            };
        case FETCH_QUOTE_SUCCESS:
            return{
                    loading: false,
                    quote: action.payload,
                    error: '',
                };
        case FETCH_QUOTE_FAILURE:
            return{
                    loading: false,
                    quote: {},
                    error: action.payload,
                };
        default:
            return state;
        }
};
export default quoteReducer;