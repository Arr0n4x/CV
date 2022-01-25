import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <h2 className="d-flex justify-content-center">Me contacter</h2>
      <Row>
        <Col>Mail</Col>
        <Col>social network</Col>
      </Row>
    </Container>
  );
}

export default Contact;
