import React, { Component } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
class Footer extends Component{
  
    render() {
        return (
            <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-7" style={{textAlign:'center'}}>
                  <div className="footer__about">
                    <div className="footer__logo">
                    <a href="#"><h3>GUAVA</h3></a>
                    </div>
                    <p>
                      Guava is the best 
                    </p>
                    <div className="footer__payment">
                      <a href="#">
                        <img src="assets/img/payment/payment-1.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/payment/payment-2.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/payment/payment-3.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/payment/payment-4.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/payment/payment-5.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-5" style={{textAlign:'center'}}>
                  <div className="footer__widget">
                    <h6>Categories</h6>
                    <ul>
                      <li>
                        <a href="#">Women's</a>
                      </li>
                      <li>
                        <a href="#">Men's</a>
                      </li>
                      <li>
                        <a href="#">Kid's</a>
                      </li>
                      <li>
                        <a href="#">Collections</a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-8 col-sm-8" style={{textAlign:'center'}}>
                  <div className="footer__newslatter">
                    <div className="footer__social">
                      <h6>About</h6>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11">
                  <div className="footer__copyright__text">
                    <p>
                      Copyright &copy;{" "}
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      All rights reserved | Guava online shopping{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="#" target="_blank">
                        Heart
                      </a>
                    </p>
                  </div>
                </div>
                <div className='col-lg-1'>
                <a href='#'><Button variant='dark'><FaArrowUp/></Button></a>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
export default Footer