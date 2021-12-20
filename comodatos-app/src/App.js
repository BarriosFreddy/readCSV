import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comodatos: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://comodatos.herokuapp.com/comodatos`)
      .then((res) => {
        const comodatos = res.data;
        this.setState({ comodatos });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { comodatos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ciudad</th>
                <th>Fecha</th>
                <th>Contenedor</th>
                <th>Movimiento</th>
              </tr>
            </thead>
            <tbody>
              {comodatos.map(
                ({ ID, CIUDAD, FECHA, CONTENEDOR, MOVIMIENTO }, index) => (
                  <tr key={ID}>
                    <td>{index + 1}</td>
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
