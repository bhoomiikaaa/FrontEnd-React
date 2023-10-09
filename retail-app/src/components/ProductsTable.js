import React from 'react';

function ProductsTable() {
  const products = [
    { id: 1, name: 'Product A', description: 'Description A', price: 19.99 },
    { id: 2, name: 'Product B', description: 'Description B', price: 29.99 },
    { id: 3, name: 'Product C', description: 'Description C', price: 39.99 },
    { id: 4, name: 'Product D', description: 'Description D', price: 49.99 },
  ];

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
