import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  FormInput,
  FormGroup,
  Col,
  Row,
  InputGroupText
} from "shards-react";

const SidebarInfo = ({ register, errors, watch }) => {
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

                <input id="eventDate" name="eventDate" type="date" className="form-control" ref={register} />
              </FormGroup>

              <FormGroup>
                <label htmlFor="enrollmentEndingDate">Prazo para Inscrição</label>
                <input id="enrollmentEndingDate" name="enrollmentEndingDate" className="form-control" type="date" ref={register} />
                {/* <DatePicker
                  id="enrollmentEnding"
                  name="enrollmentEnding"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  selected={enrollmentEndingDate}
                  onChange={date => setEnrollmentEnding(date)} /> */}
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col>
                    <label htmlFor="openingHour" className="input-required">Horário de Abertura</label>
                    <input id="openingHour" name="openingHour" defaultValue="00:00" className="form-control" type="time" ref={register} />

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
                    <input id="endingHour" name="endingHour" type="time" defaultValue="00:00" className="form-control" ref={register} />
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
              <FormGroup>
                <label htmlFor="enrollmentValue">Valor de Inscrição</label>
                <InputGroup>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>R$</InputGroupText>
                  </InputGroupAddon>
                  <FormInput id="enrollmentValue" name="enrollmentValue" type="number" innerRef={register} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Col sm="12" lg="6">
                    <label htmlFor="complementaryHours">Horas Compl.</label>
                    <InputGroup>
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="material-icons">access_time</i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <FormInput id="complementaryHours" name="complementaryHours" type="number" innerRef={register} />
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
                      <FormInput id="vacancy" name="vacancy" type="number" innerRef={register} />
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

export default SidebarInfo;
