import { Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import marchevent from '../assets/images/marchevent.jpg'

const ContactUs = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className='hwelcome'>Contact Us</h2>
        </Row>
        <Row>
          <Col xs={11}>
            <Table bordered hover className='contact'>
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
          <Col xl={12} className='contact'>
            <h2 className='hwelcome'>Come Meet Us!</h2>
            <img src={marchevent} alt="Health Event Flyer" className='marchevent'/>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col xs={3}></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactUs
