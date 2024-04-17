

import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const VendorProductPage = ({setViewProducts}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleUpload = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: productImage,
    };

    // Save the new product to localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    message.success('Product Uploaded Successfully');
    setViewProducts(true)
    // Clear the form fields after upload
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage('');
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <Form>
        <Form.Item label="Product Name">
          <Input value={productName} onChange={handleProductNameChange} />
        </Form.Item>
        <Form.Item label="Product Price">
          <Input type="number" value={productPrice} onChange={handleProductPriceChange} />
        </Form.Item>
        <Form.Item label="Product Description">
          <Input.TextArea value={productDescription} onChange={handleProductDescriptionChange} />
        </Form.Item>
        <Form.Item label="Product Image URL">
          <Input value={productImage} onChange={handleProductImageChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleUpload}>
            Upload Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VendorProductPage;
