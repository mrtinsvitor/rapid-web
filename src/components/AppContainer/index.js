import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from "react-router-dom";

import { FirebaseAuthProvider } from '../../providers/FirebaseAuth/FirebaseAuthProvider';

const AppContainer = (props) => {
  const { currentUser } = useContext(FirebaseAuthProvider);

  if (currentUser) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AppContainer;