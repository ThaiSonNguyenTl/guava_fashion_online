import * as Types from '../constants/ActionTypes'
import callAPI from '../utils/apiCaller'


export const actFetchProductGenderRequest = (gender) => {
    return dispatch => {
        callAPI(`api/products?gender=${gender}`,'GET',null)
            .then(res => dispatch(actFetchProductGender(res.data)))
           
    }
}

export const actFetchProductGender = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_GENDER,
        products
    }
}