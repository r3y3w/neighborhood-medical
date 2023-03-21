import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import marchevent from "../assets/images/marchevent.jpg";
import facebookimg from "../assets/images/facebook-image.png";
import instagram from "../assets/images/instagram-transparant.png";

const ContactUs = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="hwelcome">Contact Us</h2>
        </Row>
        <Row>
          <Col xs={11}>
            <Table bordered hover className="contact">
              <thead>
                <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Title</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jacquie</td>
                  <td>Gonzalez</td>
                  <td>Founder</td>
                  <td>nbhdmed@gmail.com</td>
                </tr>
                <tr>
                  <td>Hillary</td>
                  <td>Rodriguez</td>
                  <td>Founder</td>
                  <td>nbhdmed@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xl={12} className="contact">
            <h2 className="hwelcome">Come Meet Us!</h2>
            <img
              src={marchevent}
              alt="Health Event Flyer"
              className="marchevent"
            />
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={62}>
            {" "}
            Check us out in Social Media:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100089850439017&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer-img-fb" src={facebookimg} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/_neighborhoodmedical?utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer-img-ins" src={instagram} alt="instagram" />
            </a>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
