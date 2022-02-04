import { Card, Button, CardGroup } from "react-bootstrap";

function Projects() {
  return (
    <div className="bg-primary">
      <CardGroup>
        <Card style={{ width: "18rem" }} className="p-3 border-0">
          <Card.Img variant="top" src="hotelchambord.jpg" />
          <Card.Body>
            <Card.Title className="text-center">Projet Statique</Card.Title>
            <Card.Text>
              Premier projet d'un site d'hotel de luxe. (HTML, CSS, JAVASCRIPT)
            </Card.Text>
          </Card.Body>
          <Card.Footer className="mx-auto">
            <Button variant="warning">
              <a
                target="_blank"
                href="https://raphael-monneron.fr/hotel_chambord/"
              >
                voir
              </a>
            </Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "18rem" }} className="p-3 border-0">
          <Card.Img variant="top" src="swap.jpg" />
          <Card.Body>
            <Card.Title className="text-center">Projet Dynamique</Card.Title>
            <Card.Text>
              Second projet d'un site dynamique type le bon coin (HTML, CSS,
              JAVASCRIPT, PHP)
            </Card.Text>
          </Card.Body>
          <Card.Footer className="mx-auto">
            <Button variant="warning">
              <a target="_blank" href="https://swap-monneron.lescigales.org/">
                voir
              </a>
            </Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "18rem" }} className="p-3 border-0">
          <Card.Img variant="top" src="mt2021.jpg" />
          <Card.Body>
            <Card.Title className="text-center">
              Projet de Soutenance
            </Card.Title>
            <Card.Text>
              Dernier projet sous CMS (wordpress, woocommerce)
            </Card.Text>
          </Card.Body>
          <Card.Footer className="mx-auto">
            <Button variant="warning">
              <a target="_blank" href="https://mt2021.fr/">
                voir
              </a>
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Projects;
