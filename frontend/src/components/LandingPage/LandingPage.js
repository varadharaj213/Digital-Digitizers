import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import api from "../../config";

const LandingPage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    fetch(`${api}/blogs`)
      .then((response) => response.json())
      .then((data) => setLatestBlogs(data.slice(0, 3)))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleScroll = () => {
    const targetElement = document.getElementById('blogs');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Intro Section */}
      <section id="intro" className="home-intro">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="intro-title title">
                Web & App Developer Assessment
              </h1>
              <div className="intro-content">
                <p>
                  Welcome to the evaluation portal for Digital Digitizers. This landing page is a test module to showcase frontend capabilities, integration, and deployment standards.
                </p>
                <Button className="btn btn-contact btn-pill btn-blue btn-lg" onClick={handleScroll}>
                  Explore Modules
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706954714/uploads/rai/cygmbowumcgiihfqj7vq.png"
                width="100%"
                alt="Developer Demo"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Built */}
      <section id="whatWeDo" className="what-we-do-section text-center py-5 bg-light">
        <Container>
          <h2 className="mb-5">Tested Features Showcase</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Responsive Landing Page</h3>
                <p>
                  Fully responsive layout with modern UI showcasing service offerings, images, and CTA buttons. Built using React and Bootstrap.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Admin Dashboard (CRUD)</h3>
                <p>
                  Includes login, authentication, and full Create, Read, Update, Delete functionality using React and backend API.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>API Integration</h3>
                <p>
                  REST API built to receive and store client enquiries with validation. Built using Node.js and Express.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Contact Form Integration</h3>
                <p>
                  Frontend contact form that posts data to the server and handles both validation and async status feedback.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Live Preview & Deployment</h3>
                <p>
                  Deployed using Vercel/GitHub Pages for real-world simulation. Fully mobile-optimized and tested across devices.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Debugging & Refactoring</h3>
                <p>
                  Repaired provided broken UI code and enhanced layout responsiveness using clean CSS and semantic HTML.
                </p>
              </div>
            </Col>
          </Row>
          <Button variant="outline-primary" className="mt-4">
            Download Task Summary
          </Button>
        </Container>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="blog-section text-center py-5">
        <Container>
          <h2 className="text-center mb-4">Latest Tech Snippets</h2>
          <Row className="mb-4">
            {latestBlogs.map((blog, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <Card className="blog-card" style={{ minHeight: "350px" }}>
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    className="blog-img"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Link to={`/blog/${blog.id}`}>
                      <Button variant="primary">Read More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
