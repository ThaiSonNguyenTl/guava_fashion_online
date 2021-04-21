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

export const actSearchProductRequest = (gender,keyword) => {
    return dispatch => {
        callAPI(`api/products?gender=${gender}&search=${keyword}`, 'GET', null)
        .then(res => dispatch(actSearchProduct(res.data)))
    }
}

export const actSearchProduct = (productsFound) => {
    return {
        type: Types.SEARCH,
        productsFound
    }
}

export const actFetchProductCategoryRequest = (gender, category) => {
    return dispatch => {
        callAPI(`api/products?gender=${gender}&category=${category}`, 'GET', null)
        .then(res => dispatch(actFetchProductCategory(res.data)))
    }
}
export const actFetchProductCategory = (productCategory) => {
    return {
        type: Types.FETCH_PRODUCTS_CATEGORY,
        productCategory
    }
}

export const actGetOneProductRequest = (id) => {
    return dispatch => {
        callAPI(`api/products/${id}`, 'GET', null)
        .then(res=> dispatch(actGetOneProduct(res.data)))
    }
}
export const actGetOneProduct = (product) => {
    return {
        type: Types.GET_ONE_PRODUCT,
        product
    }
}