import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <Col md={4} sm={6}>
        <div className="product__item" >
          <div className="product__item__pic">
            <Link to={`/product_detail/${product._id}`}>
            <Image src={product.img} className="image" />
            </Link>
         
            {product.price > 30 ? <div className="label new">New</div> : ''}
            {product.price < 20 ? <div className="label sale">Sale</div> : ''}
            
            <ul className="product__hover">
              <li>
                {/* <a
                  href={product.img}
                            className="image-popup"
                          >
                            <span className="arrow_expand"></span>
                          </a> */}
                <span className="arrow_expand"></span>
              </li>
              <Link to={`/product_detail/${product._id}`}>
              <li>
                <span className="icon_bag_alt"></span>
                </li>
                </Link>
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
            <div className="product__price">{product.price < 20 ? <div> <span>$ 59.0</span> $ {product.price} </div>
              : <div>$ { product.price}</div>}
              </div>
          </div>
        </div>
      </Col>
    );
  }
}
export default Product;
