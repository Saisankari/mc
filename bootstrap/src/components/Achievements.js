import React from "react";
import {Col,Container,Row} from "react-bootstrap";
import Achievementcard from "./Achievementcard";



const Achievements = () => {
    
  return (
    <section id="Achievements" className="bg-light ">
      <Container>
        <div className="text-center">
          <h3 className="text-info my-3 py-3 bg-dark text-info">Action For Elder Abuse <i class="bi bi-gem"></i></h3>
        </div>
<Row >
                <Col md={6} lg={4}>
<Achievementcard/>
            </Col>

</Row>
</Container>
    </section>
  );
};

export default Achievements;
