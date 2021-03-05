import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link} from 'react-router-dom'
class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2500} className="carousel-item">
          <img
            className="d-block w-100"
            src="assets/img/categories/category-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5 className="animated fadeInDown" style={{ animationDelay: "1s"}}>New Arrivals</h5>
            <p class="animated fadeInUp" style={{ animationDelay: "2s"}}><Link to='/newArrivals'>Shop Now</Link></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500} className="carousel-item">
          <img
            className="d-block w-100"
            src="assets/img/carousel/carousel3.jpg"
            alt="Second slide"
          />
            <Carousel.Caption className="carousel-caption">
            <h5 className="animated fadeInDown" style={{ animationDelay: "1s"}}>Jeans</h5>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500} className="carousel-item">
          <img
            className="d-block w-100"
            src="assets/img/carousel/carousel2.jpg"
            alt="Third slide"
          />
            <Carousel.Caption className="carousel-caption">
            <h5 className="animated zoomIn" style={{ animationDelay: "1s"}}>New Collection</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Slider;
