import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'shards-react';

import api from '../utils/api';
import { formatDate, formatTime } from '../utils/date';

import LoadingSpinner from "../components/utils/LoadingSpinner";
import EventTopBar from "../components/EventDetails/EventTopBar";

import eventImagePlaceholder from '../assets/images/event-image-placeholder.png';
import EventSideBarInfo from "../components/EventDetails/EventSideBarInfo";
import EventContent from "../components/EventDetails/EventContent/EventContent";

const Event = ({ match }) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getEvents() {
      return api.get(`/events/${match.params.id}`)
        .then(res => {
          // res.coverPhoto = URL.createObjectURL(res.coverPhoto);
          setEvent(res);
          setLoading(false);
        })
        .catch(err => setError('Evento não encontrado'));
    }

    getEvents();
  }, [])

  return (
    <div>
      {loading ? <LoadingSpinner /> :
        <div>
          <EventTopBar event={event} />

          <div className="pd-30 mt-10">
            <Row>
              <Col lg="8" md="12">
                <EventContent event={event} />
              </Col>

              <Col lg="4" md="12">
                <EventSideBarInfo event={event} />
              </Col>
            </Row>
          </div>

        </div>
      }
    </div>
  );
};

const styles = {
  sidebarIcon: {
    fontSize: '20px',
    padding: '0 15px 0 5px'
  },
  sidebarInfoTag: {
    fontSize: '18px',
  }
}

export default Event;