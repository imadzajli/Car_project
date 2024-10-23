import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function AddVoiture({ onAdd }) {
  const [voiture, setVoiture] = useState({
    mark: "",
    model: "",
    color: "",
  });

  const handleChange = (e) => {
    setVoiture({ ...voiture, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(voiture);
    setVoiture({ mark: "", model: "", color: "" });
  };

  return (
    <Container className="mt-4">
      <h2>Ajouter Voiture</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Marque</Form.Label>
          <Form.Control
            type="text"
            name="mark"
            value={voiture.marque}
            onChange={handleChange}
            placeholder="Entrer mark"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Modèle</Form.Label>
          <Form.Control
            type="text"
            name="model"
            value={voiture.modele}
            onChange={handleChange}
            placeholder="Entrer model"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Couleur</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={voiture.couleur}
            onChange={handleChange}
            placeholder="Entrer color"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}

export default AddVoiture;
