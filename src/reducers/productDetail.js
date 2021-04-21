import * as Types from '../constants/ActionTypes'

const initialState = {}

const productDetail = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ONE_PRODUCT:
            state = action.product
            console.log(state)
            return state
        default:
            return state
    }
}
export default productDetail