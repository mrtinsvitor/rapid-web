import React, { useEffect, useState } from "react";

import api from '../utils/api';

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
    <>
      <h1>{event.name}</h1>
    </>
  );
};

export default Event;