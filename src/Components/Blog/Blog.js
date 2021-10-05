import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blogs">
        <h1>Blogs</h1>
      </div>
      <div className="container">
        {
          <Row xs={1} md={2} className="g-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </Row>
        }
      </div>
    </div>
  );
};

export default Blog;
