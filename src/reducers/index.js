import { combineReducers } from 'redux'
import products from './products'
import productDetail from './productDetail'
const appReducer = combineReducers({
    products,
    productDetail
  
})
export default appReducer