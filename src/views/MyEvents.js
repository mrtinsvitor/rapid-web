import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormSelect,
  FormCheckbox,
  DatePicker,
} from "shards-react";

import NotFoundEvent from "../components/errors/NotFoundEvent";

import api from '../utils/api';
import LoadingSpinner from "../components/utils/LoadingSpinner";

const HomeEventList = () => {
  const [eventList, setEventList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    return api.get('/events')
      .then(res => {
        setLoading(false);
        return setEventList(res.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate)));
      })
      .catch(err => console.log(err));
  }

  return (
    <Container fluid className="main-content-container px-4">
      {loading && <LoadingSpinner />}

      {eventList.length === 0 && !loading && <NotFoundEvent />}
      
      <div style={{ paddingTop: '1.5rem' }}>
        <Row>
          <Col lg="8" md="12">
            <strong className="d-block m-1" style={{ fontSize: '18px', color: '#007bff' }}>Segunda, 12 de Maio</strong>
            {eventList.map((event, i) => (
              <Row key={i} style={{ padding: '10px 20px' }}>
                <Card
                  className="card-post"
                  style={{ width: '100%', margin: '0 auto' }}
                >
                  <CardBody style={{ padding: '10px', }}>
                    <Row>
                      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ flexDirection: 'column', alignSelf: 'center', display: 'block', width: '13%' }}>
                          <p style={{ textAlign: 'center', marginBottom: 0, fontSize: '18px' }}>09:00</p>
                        </div>
                        <div style={{ alignSelf: 'center' }}>
                          <p className="title mb-1">{event.name}</p>

                          <Badge
                            // theme={idx % 2 === 0 ? "primary" : "success"}
                            theme="primary"
                            className="mb-2"
                          // style={{ backgroundColor: post.finalizado ? '#4e545b' : null }}
                          >
                            {/* {event.curso} */}
                            Todos os cursos
                          </Badge>

                          <div style={{}}>
                            <i className="material-icons">pin_drop</i>
                            <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, fontSize: '14px' }}>Cinema 2 - Shopping Unigranrio</p>
                          </div>

                          <div>
                            <i className="material-icons">person</i>
                            <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, fontSize: '14px' }}>26 inscrições</p>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Row>
            ))}
          </Col>

          <Col lg="4" md="12" style={{ marginTop: '45px' }}>
            <Card small className="mb-3">
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="px-4 pb-3">
                    <div className="mb-3">
                      <strong className="text-muted d-block mb-2">
                        Curso
                  </strong>
                      <div>
                        <InputGroup className="mb-3">
                          <FormSelect>
                            <option>Todos os Cursos</option>
                            <option>Administração</option>
                            <option>Biologia</option>
                            <option>Sistemas de Informação</option>
                          </FormSelect>
                        </InputGroup>
                      </div>
                    </div>

                    <div className="mb-4">
                      <strong className="text-muted d-block mb-2">
                        Mostrar Eventos Finalizados
                    </strong>
                      <FormCheckbox
                        toggle
                        checked={checked}
                        onChange={() => setChecked(!checked)}>
                        Finalizado
                    </FormCheckbox>
                    </div>

                    <div className="mb-3">
                      <strong className="text-muted d-block mb-2">
                        Data do Evento
                    </strong>
                      <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        inline
                      />
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      }

    </Container>
  );
}

export default HomeEventList;