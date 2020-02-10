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

const Event = ({ match }) => {
  const [event, setEvent] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    async function getEvents() {
      return api.get(`/events/${match.params.id}`)
        .then(res => {
          return setEvent(res);
        })
        .catch(err => setError('Evento não encontrado'));
    }

    getEvents();
  }, [])

  return (
    <div>
      {!event.id ? <LoadingSpinner /> :
        <div>
          <EventTopBar event={event} />

          <EventSideBarInfo event={event} />
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