import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row
} from 'shards-react';

import api from '../utils/api';
import { formatDate } from '../utils/date';

import avatar from "../assets/images/avatars/0.jpg";
import LoadingSpinner from "../components/utils/LoadingSpinner";
import EventTopBar from "../components/EventDetails/EventTopBar";

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
        <EventTopBar event={event} />
      }
    </div>
  );
};

export default Event;