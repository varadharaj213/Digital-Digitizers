import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-stretch">
        <Col xs={12} lg={6} className="p-4 d-flex flex-column justify-content-center bg-light">
          <h1 className="mb-3">DIGITAL DIGITIZERS</h1>
          <p>
            Welcome to India’s No.1 Digital Marketing & Tech Innovation Company. This form is part of your final technical evaluation.
          </p>
          <p>
            Please fill out the form below to simulate a client enquiry submission — this will test your ability to build responsive, working UI connected to a backend service.
          </p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <h5>Office Address</h5>
              <p>161, Boopathy Nagar Arcot
              </p>
            </li>
            <li>
              <h5>Official Email</h5>
              <a href="mailto:testnodemailerrai@gmail.com">varadharajseran20@gmail.com</a>
            </li>
          </ul>
        </Col>

        <Col xs={12} lg={6} className="p-0">
          <img
            src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706959718/search_engine_advertising-1_kupncz.jpg"
            alt="Developer Assessment"
            className="img-fluid w-100 h-100 object-fit-cover"
            style={{ maxHeight: "100%" }}
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="p-4 shadow"
            style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
          >
            <h3 className="mb-3">Submit a Test Client Enquiry</h3>
            <p className="text-muted">This simulates a real client form for the Web & App Developer assignment.</p>
            <hr />
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Describe the service required or any message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <div className="text-end">
              <Button type="submit" variant="primary">
                Submit Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsForm;
