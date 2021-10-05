import React from "react";
import { Card, Col } from "react-bootstrap";
import "./BlogCard.css";
const BlogCard = (props) => {
  const { name, tag, instructor, comments, date, img } = props.blog;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <p className="text-start blog-tag-instructor">
            <span className="blog-tag fw-bolder">{tag}</span>
            <span className="text-muted fw-bolder ps-2 text-uppercase ">By</span>
            <span className="blog-instructor">  {instructor}</span> <span className="comments">{comments}</span>
          </p>
          <Card.Title className="text-start fw-bolder blog-title">
            {name}
          </Card.Title>

          <Card.Text className="blog-date">{date}</Card.Text>
        </Card.Body>
        <a href="/" className="text-start fw-bolder learn-more ps-2">
          Learn More
        </a>
      </Card>
    </Col>
  );
};

export default BlogCard;
