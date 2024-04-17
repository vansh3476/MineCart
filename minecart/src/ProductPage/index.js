
import React, { useState } from 'react';
import { Button, Card, Col, Input, Row } from 'antd';
import { staticProducts } from '../constant';

const { Meta } = Card;

const products = JSON.parse(localStorage.getItem('products')) || [];

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const allProduct=[...staticProducts,...products]
  const filteredProducts = allProduct.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div style={{ padding: '20px' }}>
    <div style={{marginBottom:'10px'}}>
    <Button type="primary" href="/">Back To Home</Button>
    </div>
      <Input
        placeholder="Search by product name"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Row gutter={[16,16]}>
        {filteredProducts.map((product) => (
          <div style={{marginRight:'10px'}}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} style={{ width:'200px',height: '100px' }} />}
            >
            <div>
              <h4>{product.name}</h4>
              <h5>{product.description}</h5>
            </div>
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {product.price}
              </div>
            </Card>
          </div>
        ))}
      </Row>
      
    </div>
  );
};

export default ProductPage;
