import React from "react";
import { Table, Container } from "react-bootstrap";

function ListeProprietaire({ proprietaires }) {
  return (
    <Container className="mt-4">
      <h2>Liste des Proprietaires</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
        </thead>
        <tbody>
          {proprietaires.map((proprietaire, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{proprietaire.nom}</td>
              <td>{proprietaire.prenom}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListeProprietaire;
