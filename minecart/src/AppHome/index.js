
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, Statistic, Button } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Dashboard } from './dashboard';
import VendorProductPage from './vendorProductPage';
import ProductViewPage from './product';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AppHome = () => {
const [tab,setTab]=useState(1)
const navigate=useNavigate()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
   
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />} on={tab === 1} onClick={()=>setTab(1)}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} on={tab === 2} onClick={()=>setTab(2)}>
            Products
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />} on={tab === 1} onClick={()=>{navigate('/')}}>
            Log out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{tab === 1 ? 'Dashboard':'Products'}</Breadcrumb.Item>
          </Breadcrumb>
      {tab === 1 ? <Dashboard />:<ProductViewPage />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppHome;
