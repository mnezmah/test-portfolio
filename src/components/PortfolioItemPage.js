import React from 'react';

const PortfolioItem = (props) => (
  
  <div>
    <h3>Welcome to project no {props.match.params.id}</h3>
  </div>
  );


export default PortfolioItem;