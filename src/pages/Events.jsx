import { Container, Row, Col } from "react-bootstrap";

const Events = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={10}>
            <h6 className="eVentsH4"> Events </h6>
            <ol className="eVentOl">
              <li>Health Fair - March 25, 2023 </li>
              <ul >
                <li> Photo Gallery (Pending)</li>
              </ul>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
