import React, { Component } from "react";
import { FaLessThan, FaFilter,FaGreaterThan,FaSortDown } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

class NavToProducts extends Component {
  state = {
    keyword:''
  }

  onHandleChange = (event) => {
    let target = event.target
    let name = target.name
    let value = target.value
    this.setState({
      [name]:value
    })
  }
  clearInput=()=>{
  this.setState({
    keyword:''
  })
  }

  sendKeyWord = (word) => {
    this.props.receiveKeyWord(word)
    this.clearInput()
  }
  render() {
    let { keyword } = this.state
 
    return (
      <Col md={12} className="nav__to__product">
        <Row>
          <Col md={3}>
            <b onClick={() => this.sendKeyWord("")}>All Products</b>
          </Col>
          <Col md={6}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="keyword"
                placeholder="Search..."
                value={this.state.keyword}
                onChange={this.onHandleChange}
              />
              <button
                className="btn btn-dark fa fa-search"
                type="button"
                onClick={() => this.sendKeyWord(keyword)}
              >
                Go
              </button>
            </div>
          </Col>
          <Col md={3}>
            <div className="dropdown">
              <button className="dropbtn">
                <FaFilter /><FaSortDown/>
              </button>
              <div class="dropdown-content">
                            <p> Price <FaLessThan/> $20 </p>
                            <p>$20 <FaLessThan/>Price<FaLessThan/>$30</p>
                            <p>Price<FaGreaterThan/>$30</p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default NavToProducts;
