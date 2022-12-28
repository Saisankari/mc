import React from "react";
import { Container, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Contactus() {
  return (
    <section id="Contactus" className="bg-light py-3">
      <div className="text-center my-5 py-3">
        <h2 className="display-5 text-primary ">
          <i class="bi bi-door-open-fill"></i>
          Contact Us
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open"></i></InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email address">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Name">
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
              </InputGroup>
              <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contactus;
