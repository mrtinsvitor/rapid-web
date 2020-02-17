import React from "react";

import defaultCoverPhoto from '../../../assets/images/event-image-placeholder.png';

const EventTopBar = ({ event }) => {
  return (
    <div className="event-details-body-container">
      <div className="event-image"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px'
        }}
      >
        <img
          src={event.coverPhoto || defaultCoverPhoto}
          alt="Foto do evento"
          width="500"
        />
      </div>

      <div>
        <h4>Detalhes</h4>
        <p style={{ textAlign: 'justify' }}>
          {event.description}
        </p>
      </div>

      <div>
        <h4>Público Alvo</h4>
        <p style={{ textAlign: 'justify' }}>
          {event.targetAudience}
        </p>
      </div>
    </div>
  );
};

export default EventTopBar;