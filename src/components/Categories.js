import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Categories extends Component{

    render() {
        return (
            <section className="categories">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 p-0">
                  <div
                    className="categories__item categories__large__item set-bg"
                    data-setbg="https://cdn.shopify.com/s/files/1/0790/9717/articles/Screen_Shot_2016-11-23_at_12.55.17_PM_800x.png?v=1479923813"
                  >
                    <div className="categories__text">
                      <h2>Women’s fashion</h2>
                      <Link to="/women">Shop Now </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                      <div
                        className="categories__item set-bg"
                        data-setbg="assets/img/categories/category-2.jpg"
                      >
                        <div className="categories__text">
                          <h4>Men’s fashion</h4>
                          <Link to="/men">Shop Now </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                      <div
                        className="categories__item set-bg"
                        data-setbg="assets/img/categories/category-3.jpg"
                      >
                        <div className="categories__text">
                          <h4>Kid’s fashion</h4>
                          <Link to="/kid">Shop Now </Link>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                      <div
                        className="categories__item set-bg"
                        data-setbg="assets/img/categories/b1.jpg"
                      >
                        <div className="categories__text">
                          <h2>New Arrivals</h2>
                          <Link to="/newArrivals">Shop Now </Link>

                        </div>
                      </div>
                    </div>
               
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default Categories