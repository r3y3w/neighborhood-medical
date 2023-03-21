import { Container, Row, Col } from "react-bootstrap";
import nurse from "../assets/images/female-nurse.jpg";
import medic1 from "../assets/images/male-md.jpg";
import medic2 from "../assets/images/medic.jpg";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={10}>
            <h6 className="aBoutUsH4">Our Vision</h6>
            <img
              className="nurse-image-1"
              src={nurse}
              alt="By DCStudio on Freepik"
            />
            <p className="aBoutUsP">
              <ul>
                To develop a healthy community by redefining the medical culture
                and reducing health disparities.
              </ul>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10}>
            <h6 className="aBoutUsH4">Our Mission</h6>
            <img
              className="nurse-image-1"
              src={medic1}
              alt="By DCStudio on Freepik"
            />
            <p className="aBoutUsP">
              <ul>
                To increase access to quality care through mobilization of our
                patient-centered community care teams within underrepresented
                communities and diverse populations encompassing our 5 core
                values.
              </ul>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={10}>
            <h6 className="aBoutUsH4">Our Values</h6>
            <img
              className="nurse-image-1"
              src={medic2}
              alt="By DCStudio on Freepik"
            />
            <p className="aBoutUsP">
              <ul>
                <br />{" "}
                <h6 className="aBoutUsH6">
                  Our 4 core values as an organization are:
                </h6>
                <br />
                <li>We build a team of compassionate leaders</li>
                <br />
                <li>We expand health promotion</li>
                <br />
                <li> We create a culture of respect and humility</li>
                <br />
                <li>We deliver quality health education</li>
                <br />
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
