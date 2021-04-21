import React, { Component } from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import Header from './Header'

class ProductDetail extends Component {
  
    render() {
        const {productDetail} = this.props
        return (
            <Row className="container mt-ml">
                <Col md={8}>
                    <Image src ={productDetail.imgDetail} />
                </Col>
                <Col md={4}>
                    <h3>{ productDetail.name }</h3>
                    {/* <span>{productDetail.rating.length == 0 ? '5sao':'0sao'}</span> */}
                    <h3 className="text-danger">${ productDetail.price }</h3>
                </Col>
         </Row>
          
        )
    }
}
export default ProductDetail