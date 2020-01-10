import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  CardTitle,
} from "shards-react";

const EventCards = ({eventList}) => {
  return (
    <Row>
      {eventList.map((event, idx) => (
        <Col lg="4" key={idx}>
          <Card
            className="card-post mb-4"
            style={{ backgroundColor: event.finalizado ? 'rgba(214, 214, 214, 0.6)' : '#fff' }}
          >
            <CardBody>
              <span style={{ color: event.finalizado ? null : '#007bff' }}>19 de maio de 2020</span>
              {event.finalizado ?
                <Badge theme="success " style={{ float: 'right' }}>Finalizado</Badge>
                : null}
              <a href="#"><CardTitle>{event.title}</CardTitle></a>
              <Badge
                theme="primary"
                style={{ backgroundColor: event.finalizado ? '#4e545b' : null }}
              >
                {event.curso}
              </Badge>

              <div style={{ marginTop: '15px' }}>
                <i className="material-icons">pin_drop</i>
                <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>Cinema 2 - Shopping Unigranrio</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <i className="material-icons">person</i>
                  <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>26 inscrições</p>
                </div>
                <div>
                  <i className="material-icons" style={{ color: '#17c671' }}>done_all</i>
                  <p className="card-text" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, color: '#17c671' }}>20 compareceram</p>
                </div>
              </div>

            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default EventCards;