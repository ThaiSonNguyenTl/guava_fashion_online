import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetOneProductRequest } from '../action'
import ProductDetail from '../components/ProductDetail'
class ProductDetailPage extends Component{

  componentDidMount() {
    // console.log('componet did mount chay')
    let { match } = this.props
    if (match) {
      let id = match.params.id
      this.props.getOneProductRequest(id)
    }
  }
  render() {
    let {productDetail} = this.props
    return (
        <ProductDetail productDetail = {productDetail} />
        )
  }
}

const mapStateToProps = state => {
  return {
    productDetail: state.productDetail,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getOneProductRequest: (id) => dispatch(actGetOneProductRequest(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailPage)