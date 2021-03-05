import React, { Component } from "react";
// import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Slider />
        <Categories />
        <BestSeller />
        <Footer />
      </React.Fragment>
    );
  }
}
export default HomePage;
