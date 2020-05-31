/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  FormSelect,
  ListGroup,
  ListGroupItem,
  InputGroup,
  DatePicker,
  FormCheckbox
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import api from '../utils/api';
import { formatDate, formatTime, sameDay } from '../utils/date';

export default ({ }) => {

  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState();
  const [eventList, setEventList] = useState([]);
  const [defaultEventList, setDefaultEventList] = useState([]);
  const [fieldList, setFieldList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fieldSelected, setFieldSelected] = useState(null);

  React.useEffect(() => {
    async function getEvents() {
      return api.get('/events')
        .then(res => {
          setLoading(false);

          const events = res
            .filter(event => new Date(event.eventDate) >= new Date())
            .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));

          setDefaultEventList(events);
          return setEventList(events);
        })
        .catch(err => setLoading(false));
    }

    getEvents();
  }, []);

  React.useEffect(() => {
    async function getFields() {
      return api.get('/study-fields')
        .then(res => {
          setLoading(false);
          return setFieldList(res);
        })
        .catch(err => setLoading(false));
    }

    getFields();
  }, []);

  const changeField = (field) => {
    if (field.target.value === 'Todas as áreas')
      return setEventList(defaultEventList);

    const filtered = defaultEventList.filter(el => el.studyField.name === field.target.value);
    setEventList(filtered);
  }

  const changeDate = (date) => {
    if (!date) {
      setStartDate(new Date());
      return setEventList(defaultEventList);
    }

    const filtered = eventList.filter(el => sameDay(new Date(el.eventDate), date));
    setStartDate(date);
    setEventList(filtered);
  }

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="8" title="Todos os Eventos" className="text-sm-left" />
      </Row>

      <Row>
        <Col lg="8" md="12">
          {/* <strong className="d-block m-1" style={{ fontSize: '18px', color: '#007bff' }}>{formatDate(el.eventDate)}</strong> */}
          {eventList.map((el, idx) => (
            <Row style={{ padding: '10px 20px' }}>
              <Card
                className="card-post"
                style={{ backgroundColor: '#fff', width: '100%', margin: '0 auto' }}
              >
                <CardBody style={{ padding: '10px', }}>
                  <Row>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                      <div style={{ flexDirection: 'column', alignSelf: 'center', display: 'block', width: '13%' }}>
                        <p style={{ textAlign: 'center', marginBottom: 0, fontSize: '18px' }}>{formatTime(el.openingHour)}</p>
                      </div>
                      <div style={{ alignSelf: 'center' }}>
                        <span style={{ color: '#007bff' }}>{formatDate(el.eventDate)}</span>
                        <p className="title mb-1">{el.name}</p>

                        <Badge
                          // theme={idx % 2 === 0 ? "primary" : "success"}
                          theme="primary"
                          className="mb-2"
                        >
                          {el.studyField.name}
                        </Badge>

                        <div style={{}}>
                          <i className="material-icons">pin_drop</i>
                          <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, fontSize: '14px' }}>{el.local.name}</p>
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

        <Col lg="4" md="12">
          <Card small className="mb-3">
            <CardBody className="p-0">
              <ListGroup flush>
                <ListGroupItem className="px-4 pb-3">
                  <div className="mb-3">
                    <strong className="text-muted d-block mb-2">
                      Área de Estudo
                    </strong>
                    <div>
                      <InputGroup className="mb-3">
                        <FormSelect onChange={changeField}>
                          <option>Todas as áreas</option>
                          {fieldList.map((el, i) => <option key={i}>{el.name}</option>)}
                        </FormSelect>
                      </InputGroup>
                    </div>
                  </div>

                  {/* <div className="mb-4">
                    <strong className="text-muted d-block mb-2">
                      Mostrar Eventos Finalizados
                    </strong>
                    <FormCheckbox
                      toggle
                      checked={checked}
                      onChange={() => setChecked(!checked)}>
                      Finalizado
                    </FormCheckbox>
                  </div> */}

                  <div className="mb-3">
                    <strong className="text-muted d-block mb-2">
                      Data do Evento
                    </strong>
                    <DatePicker
                      selected={startDate}
                      onChange={date => changeDate(date)}
                      inline
                    />
                    <a href="#clearDate" onClick={() => changeDate()}>Limpar Data</a>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}