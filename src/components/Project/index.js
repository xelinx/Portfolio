import React from 'react';
import { Card, Button } from "react-bootstrap";

export default function Project({title, image, url, git}) {
  return (
    <Card style={{ width: '18rem' }}>
        <div className="project-image">
          <Card.img src={image} alt="Project" />
        </div>
        <div className="project-title">{title}</div>
        <Button className="project-url" variant="info">{url}</Button>
        <Button variant="info">{git}</Button>
    </Card>
  );
}