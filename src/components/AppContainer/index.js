import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from "react-router-dom";

import { AuthContext } from '../firebaseAuth/AuthProvider';

const AppContainer = (props) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AppContainer;