import React, { Component } from "react";
import { Card, Table, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProprietaireListe extends Component {
  state = { proprietaires: [] };

  componentDidMount() {
    axios.get("http://localhost:8080/api/proprietaires").then((response) => {
      this.setState({ proprietaires: response.data });
    });
  }

  deleteProprietaire = (proprietaireId) => {
    axios.delete(`http://localhost:8080/api/proprietaires/${proprietaireId}`).then(() => {
      this.setState({
        proprietaires: this.state.proprietaires.filter(
          (proprietaire) => proprietaire.id !== proprietaireId
        ),
      });
    });
  };

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Liste Proprietaires</Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
              </tr>
            </thead>
            <tbody>
              {this.state.proprietaires.length === 0 ? (
                <tr align="center">
                  <td colSpan="4">Aucune Proprietaire disponible</td>
                </tr>
              ) : (
                this.state.proprietaires.map((proprietaire) => (
                  <tr key={proprietaire.id}>
                    <td>{proprietaire.nom}</td>
                    <td>{proprietaire.prenom}</td>
                    <td>
                      <ButtonGroup>
                        <Link
                          to={`/edit_prop/${proprietaire.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </Link>{" "}
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => this.deleteProprietaire(proprietaire.id)}
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
