import { Container, Nav, Navbar } from "react-bootstrap";
import logo1 from "../assets/images/logoTransparentBg.png";
const Header = () => {
  return (
    <Navbar bg="transparent" variant={"light"} expand="md">
      <Container className="navbar">
        <img className="logo-image-1" src={logo1} alt="logo-image1" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="tabs">
            <h6 className="htab">
              <Nav.Link href="/">Home</Nav.Link>
            </h6>
            <h6 className="htab">
              <Nav.Link href="/aboutus">About Us</Nav.Link>
            </h6>
            <h6 className="htab">
              <Nav.Link href="/events">Events</Nav.Link>
            </h6>
            <h6 className="htab">
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </h6>
            <h6 className="htab">
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </h6>
            {/* <h6 className="htab">
              <Nav.Link href="/gallery">Gallery 2</Nav.Link>
            </h6> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
