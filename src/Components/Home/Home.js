import React from "react";
import "./Home.css";
import image from "../../images/home1_slider1.jpg";
import Button from "react-bootstrap/Button";
const Home = () => {
  return (
    <div className="home">
      <div className="col-6 ">
        <h1 className="fw-bolder home-text">
          We Teach You <br />{" "}
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
  );
};

export default Home;
