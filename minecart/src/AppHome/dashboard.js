import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, Statistic } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

export const Dashboard = () => {
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Active Products" value={15} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Total Orders" value={235} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Total Revenue" value={15687.5} precision={2} />
        </Card>
      </Col>
    </Row>
  </div>
  )
}
