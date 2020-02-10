/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EventCards from '../components/EventCards';
import NotFoundEvent from "../components/errors/NotFoundEvent";

const HomeEventList = () => {
  const [eventList, setEventList] = useState([]);

  return (
    <Container fluid className="main-content-container px-4">
      {eventList.length === 0 ?
        <NotFoundEvent />
        :
        <div>
          <Row noGutters className="page-header py-4">
            <PageTitle sm="8" title="Meus Eventos" className="text-sm-left" />
            <Col>
              <span style={{ color: '#007bff', float: 'right' }}>
                <Link to="/todos-eventos">Ver todos</Link>
              </span>
            </Col>
          </Row>

          <EventCards eventList={eventList} />
        </div>
      }

    </Container>
  );
}

export default HomeEventList;