import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

function buscarAnimales() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const buscar = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `http://127.0.0.1:3900/api/listarAnimales/${busqueda}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await request.json();
    console.log(data.respuesta);
    navigate(`/resultados?busqueda=${busqueda}`, {
      state: { resultados: data.respuesta },
    });
  };
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Frontend Test</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a>Granada</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "77vh" }}
      >
        <Row>
          <Col>
            <div className="text-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                style={{ width: "600px" }}
                fluid
              />

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <InputGroup
                    size="lg"
                    className="mb-3"
                    onChange={(e) => {
                      setBusqueda(e.target.value);
                      console.log(busqueda);
                    }}
                  >
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={buscar}>
                  Buscar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-secondary text-light mt-5">
        <Container fluid>
          <Row className="py-3">
            <Col className="text-center">
              <p>&copy; 2024 Buscador de animales</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default buscarAnimales;
