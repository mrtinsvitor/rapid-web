import React from "react";
import {
  Button,
  Col,
  Row
} from 'shards-react';

import { formatDate } from '../../../utils/date';

import avatar from "../../../assets/images/avatars/0.jpg";

const EventTopBar = ({ event }) => {
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
              src={avatar}
              alt="User avatar"
              width="45"
            />
          </div>

          <div style={{ flexDirection: 'column', paddingLeft: '15px' }}>
            <p style={{ margin: 0, fontFamily: 'Poppins-Regular' }}>Criado por</p>
            <p style={{ margin: 0, fontFamily: 'Poppins-Regular', fontWeight: '600' }}>Fulano de Tal</p>
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
              <Button theme="info" pill outline style={{ padding: '15px' }}>
                <i className="fas fa-qrcode" style={{ paddingRight: '8px', textAlign: 'left', fontSize: '18px' }}></i>
                <span style={{ fontSize: '14px' }}>Código QR</span>
              </Button>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
};

export default EventTopBar;