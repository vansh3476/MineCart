import React from 'react';
import { Layout, Button } from 'antd';
import landingPageImage from '../Images/landingPageImg.webp'
const { Header, Content } = Layout;

const LandingPage = () => {
   
  return (
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{color:'white'}}>MineCart</h1>
        <div>
          <Button type="primary" style={{ marginRight: 10 }} href="/login">
            I'm a Seller
          </Button>
          <Button type="primary" href="/products">
            View Products
          </Button>
        </div>
      </Header>
      <Content style={{ padding: '0px', textAlign: 'center' }}>
        <div style={{ marginTop: 10 }}>
          <img
            src={landingPageImage} 
            alt="E-commerce"
            style={{ width: '100%',height:'65vh', marginBottom: 5 }}
          />
          <h1>Welcome to MineCart</h1>
          <p>Explore a wide range of products from various vendors.</p>
        </div>
      </Content>
    </Layout>
  );
};

export default LandingPage;
