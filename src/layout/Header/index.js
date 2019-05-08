import React, { useState, useEffect } from 'react';
import { Avatar, Button, Layout } from 'antd';
import { useFirebaseContext } from '../../firebase';

const Header = () => {
  const { firebase, googleAuthProvider } = useFirebaseContext();
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (!authUser) {
        setUser(null);
        return;
      }
      setUser({
        username: authUser.displayName,
        avatar: authUser.photoURL,
      });
    });
  }, [firebase]);

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      {
        !user ? (
          <Button type="primary" onClick={signInWithGoogle}>
            Sign in with google.
          </Button>
        ) : (
          <div>
            <Avatar src={user.avatar} />
            {user.username}
            <Button type="primary" onClick={logout}>
              Log Out
            </Button>
          </div>
        )
      }
    </Layout.Header>
  );
};

export default Header;
