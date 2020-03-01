import React, { useEffect, useState } from "react";

import firebaseApp from '../../config/firebaseApp';

import LoadingSpinner from '../../components/utils/LoadingSpinner';

import api from '../../utils/api';

export const AuthContext = React.createContext();

export const FirebaseAuthProvider = ({ children, history }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(async user => {
      if (user) {
        setCurrentUser(user);

        if (!localStorage.getItem('@user')) {
          try {
            const professor = await api.get('/professors/find-by-email', { email: user.email });
            console.log('pro', professor)
            localStorage.setItem('@user', JSON.stringify(professor));
          } catch (e) {
            console.log('e', e)
          }
        }

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