import React from 'react'

export const ViewProducts = ({products}) => {
  return  !!products?.length ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
  { }
  {products.map((product, index) => (
      <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
  ))}
</div> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:'50vh' }}>
  <h1>No Products Added.</h1>
</div>
}
