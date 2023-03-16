import { Container, Row, Col } from "react-bootstrap";
import marchevent1 from "../assets/images/marchevent.jpg";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="hwelcome">Welcome!</h2>
        </Row>
        <Row>
          <img className="marchevent" src={marchevent1} alt="march event" />
        </Row>
        <Row className="patient-needs">
          <Col xs={6}>
            <img
              className="patient-image-1"
              src="https://www.practicebuilders.com/blog/wp-content/themes/pbblog/postimg/2021/july/Do-You-Understand-Your-Patients-Needs-700X246.jpg"
              alt="patient-image1"
            />
            <h6 className="hOmeH6">What Do We Offer for Our Patients?</h6> <br />
            <ul className="uList">
              <li>
                Adult Social Care, Mental Health & Community Services: works
                collaboratively with adults and their families in South Florida
                alongside hospital colleagues and key Government departments.
              </li>
              <br />
              <li>
                Primary and Preventative Care (PPC): is responsible for the
                undertaking of governance functions, performance management and
                oversight of the primary care service.
              </li>
              <br />
              <li>
                Mental Health Services: Provide services through the clinic and
                referring partners to identify and treat mental health,
                neurological and substance abuse disorders.
              </li>
            </ul>
            </Col>
            <Col xs={5}>
              <img
                className="patient-exp-1"
                src="https://www.usa.philips.com/c-dam/b2bhc/master/hts/PX-week/patientexperienceweekicon_transparant.png"
                alt="patient experience"
              />
            
            <ul className="uList">
              <h6 className="hOmeH6">
              Our own experience, based on years of caring for patients,
              is that people seeking medical care have the following needs:
              </h6> 
              <br />
              <li>
                To be treated with respect and dignity 
              </li>
              <br />
              <li>
                To be actively engaged in a community of some kind
           
              </li>
              <br />
              <li>
                To be involved in his/her own treatment and living plan
              </li>
              <br />
              <li>
                To be cared for by skilled, medically-knowledgeable
                significant need for quality home health care and social
                services within this region and we believe that by employing
                competent and well-educated staff and providing them with
                organized and responsive management, we can become the best
                community health care/social service organization of choice in
                Southern Florida.
              </li>
            </ul>
          </Col>
        </Row>


      </Container>
    </>
  );
};

export default Home;
