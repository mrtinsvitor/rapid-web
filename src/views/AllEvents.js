/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  FormSelect,
  CardSubtitle,
  CardTitle,
  CardText,
  CardHeader,
  CardLink,
  ListGroup,
  ListGroupItem
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CustomSelect from "../components/components-overview/CustomSelect";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Had denoting properly jointure which well books beyond",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019",
          curso: 'Sistemas de Informação',
          finalizado: true,
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019",
          curso: 'Medicina'
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019",
          curso: 'Direito',
          finalizado: true,
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019",
          curso: 'Biologia'
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019",
          curso: 'Administração'
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019",
          curso: 'Administração'
        }
      ],
    };
  }

  render() {
    const {
      PostsListThree,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="8" title="Todos os Eventos" className="text-sm-left" />
          <Col>
            <span style={{ color: '#007bff', float: 'right' }}>
              <a href="#" style={{ textDecoration: 'none' }}>Ver todos</a>
            </span>
          </Col>
        </Row>

        <strong className="d-block m-1" style={{ fontSize: '18px', color: '#007bff' }}>Segunda, 12 de Maio</strong>
        {PostsListThree.map((post, idx) => (
          <Row style={{ padding: '10px 20px' }}>
            <Card
              className="card-post"
              style={{ backgroundColor: post.finalizado ? 'rgba(214, 214, 214, 0.6)' : '#fff', width: '100%', margin: '0 auto' }}
            >
              <CardBody style={{ padding: '10px', }}>
                <Row>
                  <div style={{ display: 'flex', flexDirection: 'row', width: '80%' }}>
                    <div style={{ flexDirection: 'column', alignSelf: 'center', display: 'block', width: '12%' }}>
                      <p style={{ textAlign: 'center', marginBottom: 0, fontSize: '18px' }}>09:00</p>
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                      <p className="title mb-1">{post.title}</p>

                      <Badge
                        // theme={idx % 2 === 0 ? "primary" : "success"}
                        theme="primary"
                        className="mb-2"
                        style={{ backgroundColor: post.finalizado ? '#4e545b' : null }}
                      >
                        {post.curso}
                      </Badge>

                      <div style={{}}>
                        <i className="material-icons">pin_drop</i>
                        <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, fontSize: '14px' }}>Cinema 2 - Shopping Unigranrio</p>
                      </div>

                      <div>
                        <i className="material-icons">person</i>
                        <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, fontSize: '14px' }}>26 inscrições</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Row>
        ))}

      </Container>
    );
  }
}

const styles = {
  cardEventOver: {
    backgroundColor: '#d6d6d6'
  }
}

export default BlogPosts;
