import React from "react";
import "./ServiceCard.css";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
  const { img, tag, name, instructor, desc, price } = props.serv;
  return (
    <div>
      <Col>
        <Card className="card">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text className="course-tag"> {tag}</Card.Text>
            <div className="mt-4">
              <Card.Title className="text-black fw-bolder course-name">
                {name}
              </Card.Title>
              <Card.Text className="text-muted">{desc}</Card.Text>
              <Card.Text className="text-muted fw-bolder">
                by {instructor}
              </Card.Text>
              <Card.Text className="course-fee">
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
    </div>
  );
};

export default ServiceCard;
