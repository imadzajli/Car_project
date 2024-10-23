import React from "react";
import { Card } from "react-bootstrap";

function Bienvenue() {
  return (
  <div className="div1">
    <Card className="bg-blue text-white">
      <Card.Body>
        <h1 className="h11">Welcome to buy and sell cars</h1>
        <blockquote className="blockquote mb-0">
          <p className="p1">Just seach for your future car</p>
          <footer className="chek">Happy day</footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Bienvenue;
