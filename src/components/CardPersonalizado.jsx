{/* Componente card personalizado - outra alternativa*/}
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardComponent(props) {
  return (
    <Card style={{ width: props.width }}>
      <Card.Header style={{ backgroundColor: props.headerBackgroundColor, color: props.headerTextColor }}>
        {props.headerText}
      </Card.Header>
      <Card.Body style={{ backgroundColor: props.bodyBackgroundColor, color: props.bodyTextColor }}>
        <Card.Text>
          {props.bodyText}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={{ backgroundColor: props.buttonBackgroundColor, color: props.buttonTextColor }} onClick={props.onClick}>
          {props.buttonText}
        </Button>
        <img src={props.imageSrc} alt={props.imageAlt} style={{ float: props.imageFloat }} />
      </Card.Footer>
    </Card>
  );
}