import React from "react";
import { Button, ButtonGroup, Card, CardDeck, Container } from "react-bootstrap";

function Project({ image, title, url, git }) {
  return (
    <Container style={{ maxWidth: "50%" }}>
      <CardDeck className="my-2 mx-auto">
        <Card className="py-4" bg="light" style={{ flex: 1 }}>
          <div className="project-image">
            <Card.Img src={image} style={{ width: "30vw" }} alt="Project" />
          </div>
          <div fluid style={{ fontSize: "2.5vw" }} className="project-title">{title}</div>
          <div className="mx-auto">
            <ButtonGroup>
              <Button variant="info" href={url}>Deployed Link</Button>
              <Button variant="info" href={git}>Github</Button>
            </ButtonGroup>
          </div>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Project;
