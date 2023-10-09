import React, { useState, useEffect } from 'react';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Mock API call for deals
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setDeals(data))
      .catch((error) => console.error('Error fetching deals:', error));
  }, []);

  return (
    <div>
      <h1>Deals</h1>
      <ul>
        {deals.map((deal) => (
          <li key={deal.id}>{deal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deals;
