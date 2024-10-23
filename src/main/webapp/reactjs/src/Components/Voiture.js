import axios from "axios";
import React, { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default class Voiture extends Component {
  state = {
    id: null,
    mark: "",
    model: "",
    color: "",
    immatricule: "",
    year: 1900,
    price: 10000,
    proprietaire: null,
    proprietaires: []
  };

  title = "Add car"

  constructor(props) {
    super(props);
    this.voitureChange = this.voitureChange.bind(this);
    this.submitVoiture = this.submitVoiture.bind(this);

  }

  componentDidMount(){
     if (window.location.href.search("/edit") !== -1 ) {
      this.title = "Modify car"
      var id = window.location.href.split("/");
      id = id[id.length - 1] * 1; 
      axios.get("http://localhost:8080/" + id).then((data) => {
        this.setState(data.data)
      })
      }
   axios.get("http://localhost:8080/car").then((data) => {
      this.setState({"proprietaires": data.data})
    })
  }

  voitureChange = (event) => {
    //console.log(event.target)
    this.setState({ [event.target.name]: event.target.value });
  };

  updateSelect = (event) => {
    this.setState({ ["proprietaire"]: JSON.parse(event.target.value) });
  }

  submitVoiture = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8080/car", this.state).then(() => {
      window.location.href = "/list";
    });
  };


  render() {
    return (
      <Card className="border border-dark bg-blue text-white">
        <Card.Header>{this.title}</Card.Header>
        <Form onSubmit={this.submitVoiture} id="VoitureFormId">
          <Card.Body>
            <Row>
              <Form.Group as={Col} controlId="formGridMarque">
                <Form.Label>Mark</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="mark"
                  type="text"
                  value={this.state.mark}
                  onChange={this.voitureChange}
                  className="bg-white text-black"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridModele">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  name="model"
                  type="text"
                  value={this.state.model}
                  onChange={this.voitureChange}
                  className="bg-white text-black"
                />
              </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridCouleur">
              <Form.Label>Color</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                name="color"
                type="text"
                value={this.state.color}
                onChange={this.voitureChange}
                className="bg-white text-black"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImmatricule">
              <Form.Label>Immatricule</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                name="immatricule"
                type="text"
                value={this.state.immatricule}
                onChange={this.voitureChange}
                className="bg-white text-black"
              />
            </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridAnnee">
              <Form.Label>Year</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                name="year"
                type="number"
                min="1900"
                max="2024"
                value={this.state.year}
                onChange={this.voitureChange}
                className="bg-white text-black"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrix">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.voitureChange}
                className="bg-white text-black"
              />
            </Form.Group>
            </Row>


          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
