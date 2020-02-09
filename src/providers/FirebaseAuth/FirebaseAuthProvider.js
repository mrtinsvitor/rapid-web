import React, { useEffect, useState } from "react";

import firebaseApp from '../../config/firebaseApp';

import LoadingSpinner from '../../components/utils/LoadingSpinner';

export const AuthContext = React.createContext();

export const FirebaseAuthProvider = ({ children, history }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        setLoadingUser(false);
        return;
      }

      setLoadingUser(false);
      return history.push('/login');
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {loadingUser && <LoadingSpinner />}

      {!loadingUser && currentUser && children}
    </AuthContext.Provider>
  )
};

export default FirebaseAuthProvider;