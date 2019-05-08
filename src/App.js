import React from 'react';
import { Layout } from 'antd';
import { FirebaseContextProvider } from './firebase';
import Home from './pages/Home';
import Header from './layout/Header';

const { Content, Footer } = Layout;

function App() {
  return (
    <FirebaseContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Home />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </FirebaseContextProvider>
  );
}

export default App;
