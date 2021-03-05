import React, { Component } from "react";
import { Col } from "react-bootstrap";
class Products extends Component {
  render() {
    return (
      <Col md={9}>
        <section className="product spad">
          <div className="container">
            <div className="row property__gallery">{this.props.children}</div>
          </div>
        </section>
      </Col>
    );
  }
}
export default Products;
