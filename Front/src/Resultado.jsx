import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Resultados = () => {
  const location = useLocation();
  const [busqueda, setBusqueda] = useState("");
  const resultados = location.state?.resultados || [];

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
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Animales</Navbar.Brand>
          <Form inline>
            <InputGroup
              onChange={(e) => {
                setBusqueda(e.target.value);
                console.log(busqueda);
              }}
            >
              <Form.Control
                placeholder="Buscar Animal"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button variant="primary" type="submit" onClick={buscar}>
              Buscar
            </Button>
          </Form>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a>Granada</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row>
          <Col>
            <div>
              {resultados.map((animal) => (
                <>
                  <a href="">{animal.url}</a>
                  <p className="mt-3">{animal.nombre}</p>
                  <p>{animal.descripcion}</p>
                </>
              ))}
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Resultados;
