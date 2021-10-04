import React from "react";
import "./Footer.css";
import logo from "../../images/logo-B.png";
const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <section className="footer-info">
        <section className="footer-info-left">
          <h1 className="footer-info__name">UniCoach</h1>
          <h6 className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </h6>
        </section>
        <section className="footer-info-center">
          <h5 className="footer-info__email">unicoach.info@gmail.com</h5>
          <h6 className="footer-info__terms">Terms and Conditions</h6>
        </section>
        <section className="footer-info-right">
          <h5 className="footer-info__number">+8801307767187</h5>
          <h6 className="footer-info__contact">
            Success Story
            <br />
            Contact Us
          </h6>
        </section>
      </section>
      <hr className="footer-seperator" />
      <p> Copyright &copy; Uni-Coach 2021</p>
    </section>
  );
};

export default Footer;
