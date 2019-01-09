import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () =>  (
  <div>
    <h1>My Work</h1>
    <p>Here is a list of my projects:</p>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
  </div>
  );

export default PortfolioPage;