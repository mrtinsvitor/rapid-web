import React, { useEffect, useState } from "react";

import firebaseApp from '../../config/firebaseApp';

import LoadingSpinner from '../../components/utils/LoadingSpinner';

import api from '../../utils/api';

export const AuthContext = React.createContext();

export const FirebaseAuthProvider = ({ children, history }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (firebaseUser) {
      getProfessor();
    }
  }, [firebaseUser])

  const getUser = async () => {
    await firebaseApp.auth().onAuthStateChanged(async auth => {
      if (!auth) {
        return redirectLogin();
      }

      return setFirebaseUser(auth);
    });
  }

  const getProfessor = async () => {
    try {
      const professor = await api.get('/professors/find-by-email', { email: firebaseUser.email });

      if (!professor) throw new Error('E-mail ou senha incorretos, tente novamente');

      localStorage.setItem('@user', JSON.stringify(professor));
      return setLoadingUser(false);
    } catch (e) {
      redirectLogin(e);
    }
  }

  const redirectLogin = (errorMsg) => {
    localStorage.clear();
    firebaseApp.auth().signOut();
    return history.push('/login', { errorMsg });
  }

  return (
    <AuthContext.Provider
      value={{
        firebaseUser
      }}
    >
      {loadingUser && <LoadingSpinner />}

      {!loadingUser && firebaseUser && children}
    </AuthContext.Provider>
  )
};

export default FirebaseAuthProvider;