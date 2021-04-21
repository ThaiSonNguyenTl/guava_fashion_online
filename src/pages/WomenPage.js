import React, { Component } from 'react'
import Women from '../components/Women'
import Product from '../components/Product'
import Products from '../components/Products'
import Paginations from '../components/Paginations'
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import NavToProduct from "../components/NavToProduct"
import { connect } from 'react-redux'
import {
  actFetchProductCategoryRequest,
  actFetchProductGenderRequest,
  actSearchProductRequest
} from '../action'


class WomenPage extends Component{
    state = {
        gender: 'female',
        pageIndex: 1,
        pageSize: 6,
        // word_search:''
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
      let productCurrentPageIndex = products.slice(firstPage, nextPage)
      // console.log(productCurrentPageIndex)
        return (
            <React.Fragment>
            <Women>
              <SideBar receiveCategory={this.onReceiveCategory}/>
              <Products>
                <NavToProduct receiveKeyWord={this.onReceiveKeyWord }/>
                {products.length === 0 ?
                  <b className='text-warning' style={{
                    marginLeft:'250px',
                    fontSize: '20px'
                  }}>Not Found Product !</b> :
                  this.showProductsWomen(productCurrentPageIndex)
                }
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
              <Footer/>
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
  paginationIndex = number => this.setState({ pageIndex: number })
  
  onReceiveKeyWord = (keywordReceive) => {
    this.props.searchProductRequest(this.state.gender,keywordReceive)
  }
  onReceiveCategory = (categoryReceive) => {
    this.props.fetchProductsCategoryRequest(this.state.gender,categoryReceive)
  }
}


const mapStateToProps = (state) => {
    return {
        products:state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      fetchProductsRequest: (gender) => dispatch(actFetchProductGenderRequest(gender)),
      searchProductRequest: (gender, keyword) => dispatch(actSearchProductRequest(gender, keyword)),
      fetchProductsCategoryRequest:(gender,category) => dispatch(actFetchProductCategoryRequest(gender,category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WomenPage)