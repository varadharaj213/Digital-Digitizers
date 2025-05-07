import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h2 className="mb-4">About Digital Digitizers</h2>
          <p>
            Welcome to <strong>Digital Digitizers</strong> — India’s No.1 Digital Marketing & Tech Innovation Company. We specialize in delivering cutting-edge digital solutions, combining marketing excellence with advanced technology to help businesses grow faster and smarter.
          </p>
          <p>
            Founded in 2024, our company has been at the forefront of digital transformation, offering services that range from intelligent web & app development to AI-driven recruitment systems and performance-optimized digital campaigns.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Who We Are</h2>
          <p className="lead">Digital Engineers of Growth</p>
          <p>
            Digital Digitizers is powered by a team of engineers, testers, and AI enthusiasts led by Varadharaj — a full-stack developer and digital transformation strategist. With expertise spanning Generative AI, MongoDB, React.js, Selenium, and Django, we don’t just build — we innovate.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Driven by Innovation</h2>
          <p>
            Our journey began with one simple idea — blend creativity with intelligence. From automating HR processes using LLM chains to building scalable REST APIs and high-performance dashboards, our work is rooted in real-world problem solving.
          </p>
          <p>
            Every project we take on is aligned with the latest in tech — whether it's face recognition for criminal detection, chatbot testing using Botium, or lightning-fast web development with React and Tailwind.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Your Growth, Our Priority</h2>
          <p>
            Whether you're a startup, SME, or enterprise, we tailor digital strategies to your goals. From performance testing with JMeter to pixel-perfect frontend design, our multidisciplinary approach ensures your brand stands out — and performs.
          </p>
          <p>
            With hands-on knowledge in both backend and frontend stacks, we streamline projects end-to-end — on time, and at scale.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Ready to Elevate Your Brand?</h2>
          <p>
            Our team of skilled developers, UI/UX experts, testers, and AI specialists are ready to bring your vision to life. Whether you're building a web app, boosting your SEO, or launching a marketing campaign — we’ve got you covered.
          </p>
          <Button variant="primary" size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
