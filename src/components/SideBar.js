import React, { Component } from "react";
import { Col } from "react-bootstrap";
class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    //   <Container>
        
                <Col md={3}>
                    <div className='category'>
                    <h4>Product Categories</h4>
                    <ul>
                        <li>
                            <p>
                                T-Shirt
                            </p>
                        </li>
                        <li>
                            <p>
                                Shirts
                            </p>
                        </li>
                        <li>
                            <p>
                                Jeans
                            </p>
                        </li>
                        <li>
                            <p>
                                Shorts
                            </p>
                        </li>
                        <li>
                            <p>
                                Sweaters
                            </p>
                        </li>
                    </ul>
                    </div>
          </Col>
    
    //   </Container>
    );
  }
}
export default SideBar;
