import React, { Component } from "react";
import { Col } from "react-bootstrap";
class SideBar extends Component {
 
    sendCategory = (category) => {
        this.props.receiveCategory(category)
    }
    render() {
     
        return (
                <Col md={3}>
                    <div className='category'>
                    <h4>Product Categories</h4>
                    <ul>
                        <li onClick = {() => this.sendCategory(`${document.getElementById("T-Shirt").textContent}`)}>
                            <p id='T-Shirt'>
                                T-Shirt
                            </p>
                        </li>
                        <li onClick = {() => this.sendCategory(`${ document.getElementById("Shirts").textContent}`)}>
                            <p id='Shirts'>
                                Shirts
                            </p>
                        </li>
                        <li onClick = {() => this.sendCategory(`${document.getElementById("Jeans").textContent}`)}>
                            <p id = 'Jeans'>
                                Jeans
                            </p>
                        </li>
                        <li onClick = {() => this.sendCategory(`${document.getElementById("Shorts").textContent}`)}>
                            <p id='Shorts'>
                                Shorts
                            </p>
                        </li>
                        <li onClick = {() => this.sendCategory(`${document.getElementById("Sweaters").textContent}`)}>
                            <p id='Sweaters'>
                                Sweater
                            </p>
                        </li>
                    </ul>
                    </div>
          </Col>
    );
  }
}
export default SideBar;
