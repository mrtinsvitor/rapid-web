import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";

import defaultAvatar from '../../assets/images/defaults/default_avatar.png';

const UserDetails = ({ user }) => {
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={user.profilePhoto || defaultAvatar}
            alt={user.firstName}
            width="110"
          />
        </div>
        <h4 className="mb-0">{user.firstName} {user.lastName}</h4>
        <span className="text-muted d-block mb-2">Matrícula: {user.enrollment}</span>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-4">
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default UserDetails;