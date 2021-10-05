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
            {tag} By {instructor} {comments}
          </p>
          <Card.Title className="text-start">{name}</Card.Title>

          <Card.Text className="blog-date">{date}</Card.Text>
          <a href="/" className="text-start">
            Learn More
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
