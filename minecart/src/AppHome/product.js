import { Button } from 'antd';
import React, { useState } from 'react'
import { ViewProducts } from './viewProducts';
import VendorProductPage from './vendorProductPage';

const ProductViewPage = () => {
    const [viewProduct, setViewProducts] = useState(true)
    const products = JSON.parse(localStorage.getItem('products')) || [];

    return (
        <div style={{ padding: '20px' }}>
            {viewProduct && <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Products</h1>
                <Button type="primary" onClick={() => { setViewProducts(false) }}>Add Product</Button>
            </div>}
            {viewProduct ? <ViewProducts products={products}/> : <VendorProductPage setViewProducts={setViewProducts}/>}
        </div>

    );
};

export default ProductViewPage;
