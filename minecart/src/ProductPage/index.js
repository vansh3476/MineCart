
import React, { useState } from 'react';
import { Card, Col, Input, Row } from 'antd';

const { Meta } = Card;

const products = JSON.parse(localStorage.getItem('products')) || [];

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <Input
        placeholder="Search by product name"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Row gutter={[16,16]}>
        {filteredProducts.map((product) => (
          <Col span={8} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} style={{ width:'100px',height: '100px' }} />}
              bodyStyle={{ height: '100px' }}
            >
              <Meta title={product.name} description={product.description} />
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {product.price}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
