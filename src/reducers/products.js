import * as Types from '../constants/ActionTypes'

const initialState = []

const products = (state = initialState, action) =>{
    switch (action.type) {
        case Types.FETCH_PRODUCTS_GENDER:
            state = action.products
            return [...state]
        case Types.SEARCH:
            state = action.productsFound
            return [...state]
        case Types.FETCH_PRODUCTS_CATEGORY:
            state = action.productCategory
            return [...state]
        default:
            return [...state]
    }
}
export default products