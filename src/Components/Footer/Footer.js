import React from "react";
import "./Footer.css";
import logo from "../../images/logo-B.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer-seperator" />
      <div className="footer-logo">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="footer-info">
        <div className="footer-info-left">
          <h1 className="footer-info__name">UniCoach</h1>
          <p className="text-start">Your Coaching Partner</p>
          <h6 className="footer-info__returns">Returns Policy</h6>
        </div>
        <div className="footer-info-center">
          <h5 className="footer-info__email">unicoach.info@gmail.com</h5>
          <h6 className="footer-info__terms">Terms and Conditions</h6>
        </div>
        <div className="footer-info-right">
          <h5 className="footer-info__number">+8801307767187</h5>
          <h6 className="footer-info__contact">
            Success Story
            <br />
            Contact Us
          </h6>
        </div>
      </div>
      <hr className="footer-seperator" />
      <p> Copyright &copy; Uni-Coach 2021 @Fazley Bin Mahbub</p>
    </div>
  );
};

export default Footer;
