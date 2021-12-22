import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import React from "react";

const BASE = "http://localhost:3001/comodatos";
//const BASE = "https://comodatos.herokuapp.com/comodatos"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangeField = this.onChangeField.bind(this);

    this.state = {
      comodatos: [],
      searchTerm: "",
      field: "BL"
    };
  }

  componentDidMount() {
    axios
      .get(BASE)
      .then((res) => {
        const comodatos = res.data;
        this.setState({ comodatos });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  search() {
    const { searchTerm, field } = this.state;
    const url = searchTerm ? `${BASE}?${field}=${searchTerm}` : BASE;
    axios
      .get(url)
      .then((res) => {
        const comodatos = res.data;
        this.setState({ comodatos });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onChangeSearch(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  onChangeField(event) {
    const field = event.target.value;
    this.setState({ field });
  }

  render() {
    const { comodatos, searchTerm, field } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState"></Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Col>
                  <Form.Select value={field} onChange={this.onChangeField}>
                    <option value="BL">BL</option>
                    <option value="CIUDAD">CIUDAD</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={this.onChangeSearch}
                    value={searchTerm}
                  />
                </Col>
                <Col sm={2}>
                  <Button variant="primary" type="button" onClick={this.search}>
                    Buscar
                  </Button>
                </Col>
              </Form.Group>
            </Row>
          </Form>

          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>BL</th>
                <th>Ciudad</th>
                <th>Fecha</th>
                <th>Contenedor</th>
                <th>Movimiento</th>
              </tr>
            </thead>
            <tbody>
              {comodatos.map(
                ({ ID, CIUDAD, FECHA, CONTENEDOR, MOVIMIENTO, BL }, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{BL}</td>
                    <td>{CIUDAD}</td>
                    <td>{FECHA}</td>
                    <td>{CONTENEDOR}</td>
                    <td>{MOVIMIENTO}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
