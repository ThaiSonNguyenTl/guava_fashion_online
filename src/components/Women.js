import React, { Component, Fragment } from "react";
import Header from "./Header";
import { FaAngleRight } from "react-icons/fa";
import SideBar from "./SideBar";
import {Row} from 'react-bootstrap'

const BackGround = 
  "https://c.wallhere.com/photos/c3/f4/simple_background_white_background_women_eyes_Sarah_McDaniel-93074.png!d";

let sectionStyle = {
  width: "100%",
  height: "85vh",
  backgroundImage: `url(${BackGround})`,
};

class Women extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={sectionStyle}>
          <div className="centered">
            <h2>Women’s fashion</h2>
            <p>
              Home <FaAngleRight /> Women
            </p>
          </div>
        </div>
        <Row>
          <SideBar />
          {this.props.children}
        </Row> 
      </React.Fragment>
    );
  }
}
export default Women;
