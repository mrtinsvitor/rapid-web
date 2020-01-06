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
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
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
              <a href="#" style={{ textDecoration: 'none' }}>Ver todos</a>
            </span>
          </Col>
        </Row>

        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card className="card-post mb-4">
                <CardBody>
                  <span style={{ color: '#007bff' }}>19 de maio de 2020</span>
                  <a href="#"><CardTitle>{post.title}</CardTitle></a>
                  <CardSubtitle>Sistemas de Informação</CardSubtitle>

                  <div style={{ marginTop: '15px' }}>
                    <i className="material-icons">pin_drop</i>
                    <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>Cinema 2 - Shopping Unigranrio</p>
                  </div>

                  <div>
                    <i className="material-icons">person</i>
                    <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>26 inscrições</p>
                  </div>
                </CardBody>
                {/* <CardFooter className="border-top d-flex">
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter> */}
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

export default BlogPosts;
