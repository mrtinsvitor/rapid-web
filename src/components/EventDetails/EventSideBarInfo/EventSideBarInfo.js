import React from "react";
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'shards-react';

import { formatDate, formatTime } from '../../../utils/date';

const EventSideBarInfo = ({ event }) => {
  return (
    <>
      <Card small className="mb-3">
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-4 pb-3">
              <i className="far fa-calendar-alt" style={styles.sidebarIcon}></i>
              <span style={styles.sidebarInfoTag}>{formatDate(event.eventDate)}</span>
            </ListGroupItem>

            <ListGroupItem className="px-4 pb-3">
              <i className="far fa-clock" style={styles.sidebarIcon}></i>
              <span style={styles.sidebarInfoTag}>{`De ${formatTime(event.openingHour)} às ${formatTime(event.endingHour)} horas`}</span>
            </ListGroupItem>

            <ListGroupItem className="px-4 pb-3">
              <i className="fas fa-map-marker-alt" style={styles.sidebarIcon}></i>
              <span style={styles.sidebarInfoTag}>{event.local.name}</span>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>

      <Card small className="mb-3">
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-4 pb-3">
              <i className="fas fa-users" style={styles.sidebarIcon}></i>
              <span
                style={styles.sidebarInfoTag}
              >
                {event.vacancy ? `${event.vacancy} vagas` :
                  'Vagas ilimitadas'
                }
              </span>
            </ListGroupItem>

            <ListGroupItem className="px-4 pb-3">
              <i className="far fa-clock" style={styles.sidebarIcon}></i>
              <span
                style={styles.sidebarInfoTag}
              >
                {`${event.complementaryHours} horas complementares`}
              </span>
            </ListGroupItem>

            <ListGroupItem className="px-4 pb-3">
              <i className="far fa-money-bill-alt" style={styles.sidebarIcon}></i>
              <span
                style={styles.sidebarInfoTag}
              >
                {event.value ? `R$ ${event.value} reais` : 'Grátis'}
              </span>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
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

export default EventSideBarInfo;