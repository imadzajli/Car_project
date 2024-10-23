import React, { Component } from "react";
import { Card, Table, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class VoitureListe extends Component {
  state = { voitures: [] };

  componentDidMount() {
    axios.get("http://127.0.0.1:8080/all_cars").then((response) => {
      this.setState({ voitures: response.data });
    });
  }

  deleteVoiture = (voitureId) => {
    axios.delete(`http://localhost:8080/car/${voitureId}`).then(() => {
      this.setState({
        voitures: this.state.voitures.filter(
          (voiture) => voiture.id !== voitureId
        ),
      });
    });
  };

  render() {
    return (
      <Card className="border border-dark bg-blue text-white">
        <Card.Header>Cars list</Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="white">
            <thead>
              <tr>
                <th>Mark</th>
                <th>Model</th>
                <th>Color</th>
                <th>Immatricule</th>
                <th>Year</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.voitures.length === 0 ? (
                <tr align="center">
                  <td colSpan="4">Aucune Voiture disponible</td>
                </tr>
              ) : (
                this.state.voitures.map((voiture) => (
                  <tr key={voiture.id}>
                    <td>{voiture.mark}</td>
                    <td>{voiture.model}</td>
                    <td>{voiture.color}</td>
                    <td>{voiture.immatricule}</td>
                    <td>{voiture.year}</td>
                    <td>{voiture.price}</td>
                    <td>
                      <ButtonGroup>
                        <Link
                          to={{
                              pathname: `/edit/${voiture.id}`,
                              query: {
                                voiture: JSON.stringify(voiture)
                              }
                            }}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </Link>{" "}
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => this.deleteVoiture(voiture.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
