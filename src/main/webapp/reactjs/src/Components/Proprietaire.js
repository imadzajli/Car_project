import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default class Proprietaire extends Component {
  state = {
    id: 0,
    nom: "",
    prenom: "",
  };

  title = "Ajouter proprietaire";

  constructor(props) {
    super(props);
    this.proprietaireChange = this.proprietaireChange.bind(this);
    this.submitProprietaire = this.submitProprietaire.bind(this);
  }

  componentDidMount() {
    if (window.location.href.search("/edit") != -1) {
      const data = window.location.href.split("/");
      const id = data[data.length - 1] * 1;
      axios.get(`http://localhost:8080/user/${id}`).then((data) => {
        this.setState(data.data);
      })
    }
  }

  proprietaireChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitProprietaire = (event) => {
    event.preventDefault();
    if (this.state.id != 0) {
      axios.put(`http://localhost:8080/user/${this.state.id}`, this.state).then(() => {
        window.location.href = "/list_prop";
      });
    } else {
       axios.post(`http://localhost:8080/user`, this.state).then(() => {
        window.location.href = "/list_prop";
      });
    }
  };

  render() {
    return (
      <Card className="border border-dark bg-blue text-white">
        <Card.Header>Ajouter Proprietaire</Card.Header>
        <Form onSubmit={this.submitProprietaire} id="ProprietaireFormId">
          <Card.Body>
            <Row>
              <Form.Group as={Col} controlId="formGridMarque">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="nom"
                  type="text"
                  value={this.state.nom}
                  onChange={this.proprietaireChange}
                  className="bg-white text-white"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridModele">
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="prenom"
                  type="text"
                  value={this.state.prenom}
                  onChange={this.proprietaireChange}
                  className="bg-white text-white"
                />
              </Form.Group>
            </Row>
            <Row>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
          </Row>
          </Card.Body>
        </Form>
      </Card>
    );
  }
}
