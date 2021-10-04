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
          <section className="footer-info__name">UniCoach</section>
          <section className="footer-info__returns">
            Returns Policy
            <br />
            Delivery
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            unicoach.info@gmail.com
          </section>
          <section className="footer-info__terms">Terms and Conditions</section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">+8801307767187</section>
          <section className="footer-info__contact">
            Success Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};

export default Footer;
