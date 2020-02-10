import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'shards-react';

import { formatDate, formatTime } from '../../../utils/date';

import eventImagePlaceholder from '../../../assets/images/event-image-placeholder.png';

const EventSideBarInfo = ({ event }) => {
  return (
    <div style={{ padding: '30px', marginTop: '10px' }}>
      <Row>
        <Col lg="8" md="12">
          <div className="event-details-body-container">
            <div className="event-image"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '30px'
              }}
            >
              <img
                src={eventImagePlaceholder}
                alt="Foto do evento"
                width="250"
              />
            </div>

            <div>
              <h4>Detalhes</h4>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum faucibus diam in dictum. Duis ullamcorper a justo eget aliquet. Integer ac efficitur metus. Duis molestie, mi vel vehicula auctor, nisi dolor tincidunt ipsum, eu varius elit nunc sit amet tellus. Maecenas sagittis volutpat iaculis. Mauris magna velit, porttitor eu ultricies sed, condimentum vel tortor. Cras placerat, elit tincidunt tincidunt consectetur, eros est tristique quam, ac condimentum lorem lacus in lectus. Cras neque eros, iaculis ut consectetur quis, aliquam in odio. Fusce eget est quis orci ultricies dictum a sed mauris. Vestibulum dignissim mauris in eros pulvinar commodo. Vivamus vel faucibus quam. Integer leo massa, sodales in blandit nec, faucibus quis erat. Nulla facilisi. Etiam sem urna, dignissim vel risus vitae, hendrerit gravida nunc.
              </p>
            </div>

            <div>
              <h4>Público Alvo</h4>
              <p style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum faucibus diam in dictum. Duis ullamcorper a justo eget aliquet.
              </p>
            </div>
          </div>
        </Col>

        <Col lg="4" md="12">
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
                  <span style={styles.sidebarInfoTag}>Unigranrio</span>
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
        </Col>
      </Row>
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

export default EventSideBarInfo;