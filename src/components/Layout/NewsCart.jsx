import React from "react";
import { Card } from "react-bootstrap";

const NewsCart = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <Card className="my-4">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCart;
