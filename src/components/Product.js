import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <Col md={4} sm={6}>
        <Link className="product__item">
          <div className="product__item__pic">
            <Image src={product.img} className="image" />
            <div className="label new">New</div>
            <ul className="product__hover">
              <li>
                <span className="arrow_expand"></span>
              </li>
              <li>
                <span className="icon_bag_alt"></span>
              </li>
            </ul>
          </div>
          {/* <p className="text__style">{product.name}</p> */}
          <div className="product__item__text">
            <h6>{product.name}</h6>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product__price">$ {product.price}</div>
          </div>
        </Link>
        {/* <h6 className="text__style">$ {product.price}</h6> */}
      </Col>
    );
  }
}
export default Product;
