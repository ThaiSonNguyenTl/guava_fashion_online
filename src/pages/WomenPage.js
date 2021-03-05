import React, { Component } from 'react'
import Women from '../components/Women'
import Product from '../components/Product'
import Products from '../components/Products'
import { connect } from 'react-redux'
import { actFetchProductGenderRequest } from '../action'


class WomenPage extends Component{
    state = {
        gender:'female'
    }
    componentDidMount() {
        let {gender} = this.state
        this.props.fetchProductsRequest(gender)
    }
    render() {
        let {products} = this.props
        return (
            <Women>
                <Products>
                    {this.showProductsWomen(products)}
               </Products>
            </Women>
        )
    }
    showProductsWomen = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => (
                <Product
                    key={index}
                    product={product}
                />
            ))
        }
        return result
    }
}

const mapStateToProps = (state) => {
    return {
        products:state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsRequest: (gender) => dispatch(actFetchProductGenderRequest(gender))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WomenPage)