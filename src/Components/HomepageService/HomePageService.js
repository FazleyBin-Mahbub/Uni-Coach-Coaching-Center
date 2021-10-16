import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HomePageService.css";
const HomePageService = (props) => {
  const { img, name, desc, instructor, tag, price } = props.service;
  return (
    <Col>
      <Card className="homepage-service-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text className="service-tag"> {tag}</Card.Text>
          <div className="mt-4">
            <Card.Title className="text-black fw-bolder service-name">
              {name}
            </Card.Title>
            <Card.Text className="text-muted">{desc}</Card.Text>
            <Card.Text className="text-muted fw-bolder">
              by {instructor}
            </Card.Text>
            <Card.Text className="course-price">
              <span>$</span>
              {price}
            </Card.Text>
            <NavLink to="/purchase">
              <button className="enroll-btn fw-bolder">Enroll Now</button>
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePageService;
