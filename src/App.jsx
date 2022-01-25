import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Description from "./components/Description";
import Cv from "./components/Cv";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Description />
      </Row>
      <Row>
        <Cv />
      </Row>
      <Row>
        <Projects />
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
