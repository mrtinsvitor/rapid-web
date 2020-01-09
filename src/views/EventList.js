/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Link } from 'react-router-dom';
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
  CardLink
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
          <PageTitle sm="8" title="Eventos na sua área" className="text-sm-left" />
          <Col>
            <span style={{ color: '#007bff', float: 'right' }}>
              <Link to="/todos-eventos">Ver todos</Link>
            </span>
          </Col>
        </Row>

        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card
                className="card-post mb-4"
                style={{ backgroundColor: post.finalizado ? 'rgba(214, 214, 214, 0.6)' : '#fff' }}
              >
                <CardBody>
                  <span style={{ color: post.finalizado ? null : '#007bff' }}>19 de maio de 2020</span>
                  {post.finalizado ?
                    <Badge theme="success " style={{ float: 'right' }}>Finalizado</Badge>
                    : null}
                  <a href="#"><CardTitle>{post.title}</CardTitle></a>
                  {/* <CardSubtitle>Sistemas de Informação</CardSubtitle> */}
                  <Badge
                    // theme={idx % 2 === 0 ? "primary" : "success"}
                    theme="primary"
                    style={{ backgroundColor: post.finalizado ? '#4e545b' : null }}
                  >
                    {post.curso}
                  </Badge>

                  <div style={{ marginTop: '15px' }}>
                    <i className="material-icons">pin_drop</i>
                    <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>Cinema 2 - Shopping Unigranrio</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <i className="material-icons">person</i>
                      <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>26 inscrições</p>
                    </div>
                    <div>
                      <i className="material-icons" style={{ color: '#17c671' }}>done_all</i>
                      <p className="card-text" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, color: '#17c671' }}>20 compareceram</p>
                    </div>
                  </div>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

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
