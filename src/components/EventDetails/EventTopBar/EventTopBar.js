import React, { useState } from "react";
import {
  Button,
  Col,
  Row
} from 'shards-react';

import { formatDate } from '../../../utils/date';

import defaultAvatar from "../../../assets/images/defaults/default_avatar.png";
import QRModal from "../../QRModal/QRModal";

const EventTopBar = ({ event }) => {
  const [showModal, toggleModal] = useState(false);

  return (
    <div
      className="top-event-bar-container"
      style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid rgba(46, 62, 72, .12)'
      }}>
      <div style={{ padding: '20px 30px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}
        >
          <div>
            <img
              className="rounded-circle"
              src={event.professor.profilePhoto || defaultAvatar}
              alt="User avatar"
              width="45"
            />
          </div>

          <div style={{ flexDirection: 'column', paddingLeft: '15px' }}>
            <p style={{ margin: 0, fontFamily: 'Poppins-Regular' }}>Criado por</p>
            <p style={{ margin: 0, fontFamily: 'Poppins-Regular', fontWeight: '600' }}>
              {`${event.professor.firstName} ${event.professor.lastName}`}
            </p>
          </div>
        </div>

        <div>
          <Row>
            <Col sm="10">
              <div>
                <h3 style={{ margin: 0, fontSize: '20px', fontFamily: 'Raleway-Black' }}>{event.name}</h3>
                <p style={{ margin: 0, fontFamily: 'Raleway-Bold', fontSize: '16px' }}>{formatDate(event.eventDate)}</p>
              </div>
            </Col>

            <Col>
              <Button
                theme="info"
                pill
                outline
                style={{ padding: '15px' }}
                onClick={() => toggleModal(!showModal)}
              >
                <i className="fas fa-qrcode" style={{ paddingRight: '8px', textAlign: 'left', fontSize: '18px' }}></i>
                <span style={{ fontSize: '14px' }}>Código QR</span>
              </Button>
            </Col>
          </Row>
        </div>

        <QRModal
          open={showModal}
          toggle={() => toggleModal(!showModal)}
          qrCodeValue={event.id}
          eventName={event.name}
        />

      </div>
    </div>
  );
};

export default EventTopBar;