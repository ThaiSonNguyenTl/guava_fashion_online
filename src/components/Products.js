import React, { Component } from "react";
import { Col,Row } from "react-bootstrap";
class Products extends Component {
  render() {
    return (
      <Col md={9}>
        <Row>
        {this.props.children}
        </Row>
      
      </Col>
    );
  }
}
export default Products;
