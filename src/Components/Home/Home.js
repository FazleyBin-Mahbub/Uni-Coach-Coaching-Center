import React from "react";
import "./Home.css";
import image from "../../images/home1_slider1.jpg";

import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import HomePageService from "../HomepageService/HomePageService";

const Home = () => {
  const [homepageService, setHomepageService] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setHomepageService(data));
  }, []);
  return (
    <div>
      <div className="home">
        <div className="col-6 ">
          <h1 className="fw-bolder home-text">
            We Teach You <br />
            <span className="home-span">TakeLife Control</span>
          </h1>
          <p className="home-para">
            Since 2007 we have been a visionary and a reliable Coaching Center
            with world class Facilities
          </p>
          <Button className="home-btn p-2" variant="outline-primary">
            Learn More
          </Button>
        </div>
        <div className="col-6">
          <img className="img-fluid home-img" src={image} alt="" />
        </div>
      </div>
      {/* services  */}
      <div className="homepage-services">
        <h1 className="fw-bolder">Our Services</h1>
        <p className="text-muted">
          Hopefully That's might be interesting for you
        </p>
        <div className="homepage-serviceCard container">
          <Row xs={1} md={2} className="g-4">
            {homepageService.map((service) => (
              <HomePageService key={service.id} service={service} />
            ))}
          </Row>
        </div>
      </div>
      {/* services end  */}
      <button className="service-load fw-bolder" to="/services">
        <a href="/services">Load More</a>
      </button>
    </div>
  );
};

export default Home;
