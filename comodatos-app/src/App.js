import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import React from "react";

const BASE = "https://comodatos.herokuapp.com"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

    this.state = {
      comodatos: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE}/comodatos`)
      .then((res) => {
        const comodatos = res.data;
        this.setState({ comodatos });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  search() {
    const { searchTerm } = this.state;
    const url = searchTerm ? BASE + `/comodatos?BL=${searchTerm}` : BASE
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

  onChangeSearch(event){
    const searchTerm = event.target.value
    this.setState({ searchTerm })
  }

  render() {
    const { comodatos, searchTerm } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Form>
            <Row className="mb-3">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  LB
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="LB"
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
                  <tr key={ID}>
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
