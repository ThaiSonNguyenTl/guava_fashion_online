import React, { Component } from 'react'

class Product extends Component{
  
  render() {
      let {product} = this.props
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mix">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg={product.img}
              >
                <div className="label new">New</div>
                <ul className="product__hover">
                  <li>
                    <a
                      href={product.img}
                      className="image-popup"
                    >
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">{product.name}</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">$ {product.price}</div>
              </div>
            </div>
          </div>
        )
    }
}
export default Product