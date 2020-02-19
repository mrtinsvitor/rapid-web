import React, { useState, useEffect } from "react";
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

const SidebarCategories = ({ register, errors, watch }) => {
  return (
    <>
      <Card small className="mb-3">
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-4 pb-3">
              <FormGroup>
                <label htmlFor="eventDate" className="input-required">Data do Evento</label>
                {/* <DatePicker
                  id="eventDate"
                  name="eventDate"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  required
                  selected={eventDate}
                  onChange={date => setEventDate(date)}
                  innerRef={register}
                  value={eventDate}
                /> */}

                <input id="eventDate" name="eventDate" type="date" ref={register} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="enrollmentEnding">Prazo para Inscrição</label>
                <input id="enrollmentEnding" name="enrollmentEnding" type="date" ref={register} />
                {/* <DatePicker
                  id="enrollmentEnding"
                  name="enrollmentEnding"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  selected={enrollmentEndingDate}
                  onChange={date => setEnrollmentEnding(date)} /> */}
              </FormGroup>

              <FormGroup CardBody>
                <Row>
                  <Col>
                    <label htmlFor="openingHour" className="input-required">Horário de Abertura</label>
                    <input id="openingHour" name="openingHour" type="time" ref={register} />

                    {/* <DatePicker
                      id="openingHour"
                      name="openingHour"
                      required
                      selected={startHour}
                      onChange={date => setStartHour(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="H:MM"
                    /> */}
                  </Col>

                  <Col>
                    <label htmlFor="endingHour" className="input-required">Horário de Encerramento</label>
                    <input id="endingHour" name="endingHour" type="time" ref={register} />
                    {/* <DatePicker
                      id="endingHour"
                      name="endingHour"
                      required
                      selected={startHour}
                      onChange={date => setStartHour(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      // timeCaption="Time"
                      dateFormat="H:MM"
                    /> */}
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
