import React from "react";
import "./Services.css";
import image from "../../images/courses.png";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/all-services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center pt-5 mt-5">
      <div className="d-flex ">
        <div className="col-4">
          <img className="course-img" src={image} alt="" />
        </div>
        <div className="col-8 about-course">
          <h1 className="">Our Courses</h1>
          <p className="text-muted course-desc">
            When you come to coaching or counseling, we work with you, your
            situation / issue and together we find the best solution for you.
            All the tools we will use, you will be able to apply later in life.
          </p>
        </div>
      </div>
      <div className="service-card mt-5">
        <Row xs={1} md={3} className="g-3 container ">
          {services.map((serv) => (
            <ServiceCard serv={serv}></ServiceCard>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
