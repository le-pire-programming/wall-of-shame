import React from 'react';
import firebase, { googleAuthProvider } from './firebase';

export const FirebaseContext = React.createContext(null);

export const useFirebaseContext = () => React.useContext(FirebaseContext);

export const FirebaseContextProvider = ({ children }) => (
  <FirebaseContext.Provider value={{ firebase, googleAuthProvider }}>
    { children }
  </FirebaseContext.Provider>
);
