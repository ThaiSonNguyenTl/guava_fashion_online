import React, { Component } from 'react'
import Women from '../components/Women'
import Product from '../components/Product'
import Products from '../components/Products'
import Paginations from '../components/Paginations'
import { connect } from 'react-redux'
import { actFetchProductGenderRequest } from '../action'


class WomenPage extends Component{
    state = {
        gender: 'female',
        pageIndex: 1,
        pageSize:6  
    }
    componentDidMount() {
        let {gender} = this.state
        this.props.fetchProductsRequest(gender)
    }
    render() {
        let { products } = this.props
        let { pageIndex, pageSize } = this.state
        let nextPage = pageSize * pageIndex
        let firstPage = nextPage - pageSize
        let productCurrentPageIndex = products.slice(firstPage,nextPage)
        return (
            <React.Fragment>
            <Women>
                <Products>
                    {this.showProductsWomen(productCurrentPageIndex)}
                </Products>
                </Women>
            <Paginations
              pageIndex={pageIndex}
              pageSize={pageSize}
              totalProducts={products.length}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              paginationIndex={this.paginationIndex}
            />
            </React.Fragment>
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
    nextPage = () => {
        let { products } = this.props
        let {pageSize,pageIndex} = this.state
          if (pageIndex === Math.ceil(products.length / pageSize)) {
            this.setState({ pageIndex: 1 })
    
          } else {
            this.setState({ pageIndex: pageIndex + 1 })
          }  
        }
      prevPage = () => {
        let { products } = this.props
        let {pageSize,pageIndex} = this.state
          if (pageIndex === 1) {
            this.setState({
              pageIndex: Math.ceil(products.length / pageSize)
            })
          } else {
            this.setState({ pageIndex: pageIndex - 1 })
          }
  }
  paginationIndex = number => this.setState({pageIndex:number})
  
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