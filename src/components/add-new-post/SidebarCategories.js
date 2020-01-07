import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput,
  DatePicker,
  FormGroup,
  Col,
  Row,
  InputGroupText
} from "shards-react";


const SidebarCategories = ({ title }) => {

  const [startDate, setStartDate] = useState(new Date());
  const [startHour, setStartHour] = useState(new Date());

  return (
    <>
      <Card small className="mb-3">
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-4 pb-3">
              <FormGroup>
                <label htmlFor="date" className="input-required">Data do Evento</label>
                <DatePicker
                  id="date"
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate}
                  required
                  selected={startDate}
                  onChange={date => setStartDate(date)} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="enrollment-ending">Data Limite para Inscrição</label>
                <DatePicker
                  id="enrollment-ending"
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate}
                  required
                  selected={startDate}
                  onChange={date => setStartDate(date)} />
              </FormGroup>

              <FormGroup CardBody>
                <Row>
                  <Col>
                    <label htmlFor="opening-hour" className="input-required">Horário de Abertura</label>
                    <DatePicker
                      required
                      selected={startHour}
                      onChange={date => setStartHour(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      // timeCaption="Time"
                      dateFormat="H:MM"
                    />
                  </Col>

                  <Col>
                    <label htmlFor="ending-hour" className="input-required">Horário de Encerramento</label>
                    <DatePicker
                      required
                      selected={startHour}
                      onChange={date => setStartHour(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      // timeCaption="Time"
                      dateFormat="H:MM"
                    />
                  </Col>
                </Row>
              </FormGroup>

            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card small className="mb-3">
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-4 pb-3">
              <FormGroup CardBody>
                <label htmlFor="enrollment-value">Valor de Inscrição</label>
                <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>R$</InputGroupText>
                  </InputGroupAddon>
                  <FormInput id="enrollment-value" value="0" onChange={() => { }} />
                </InputGroup>
              </FormGroup>

              <FormGroup CardBody>
                <Row>
                  <Col sm="12" lg="6">
                    <label htmlFor="hours">Horas Compl.</label>
                    <InputGroup>
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="material-icons">access_time</i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <FormInput id="hours" type="number" value="0" onChange={() => { }} />
                    </InputGroup>
                  </Col>

                  <Col sm="12" lg="6">
                    <label htmlFor="vacancy">Vagas</label>
                    <InputGroup>
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="material-icons">group</i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <FormInput id="vacancy" type="number" value="0" onChange={() => { }} />
                    </InputGroup>
                  </Col>
                </Row>
              </FormGroup>

            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}

export default SidebarCategories;
