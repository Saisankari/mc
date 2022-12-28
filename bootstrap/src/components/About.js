import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import apj from "../Assets/apj.jpg";
import './About.css';

const About = () => {
  return (
    <section id="About">
      <div className="text-center my-5 py-3 bg-dark text-info">
        <h2 className="display-5 text-primary bg-dark text-info">
          <i class="bi bi-door-open-fill"></i>
          Our Team
        </h2>
      </div>
      <Container>
        <Row className="align-item-center bg-dark text-info">
          <Col md={9}>
            <img src={apj} ></img>
          </Col>
          <Col md={3}>
            <div>
              <h2 className="h1"> Charity Firm</h2>
              <p className="lead-text-muted">
              
                Although the tests raised worldwide alarm, Kalam important role
                in the country 1998 nuclear weapons testing cemented Indistatus
                as a nuclear power and elevated him as a national hero. In 1998,
                Kalam proposed Technology Vision 2020, a statewide strategy that
                he described as a road map for converting India from a
                
              </p>
              <p className="lead-text-muted">
              
                Although the tests raised worldwide alarm, Kalam important role
                in the country 1998 nuclear weapons testing cemented Indistatus
                as a nuclear power and elevated him as a national hero. In 1998,
                Kalam proposed Technology Vision 2020, a statewide strategy that
                he described as a road map for converting India from a
                
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
