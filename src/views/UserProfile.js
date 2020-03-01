import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log('a')
    const user = JSON.parse(localStorage.getItem('@user'));
    setUser(user);
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Perfil" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <UserDetails user={user} />
        </Col>
        <Col lg="8">
          <UserAccountDetails user={user} />
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfileLite;
