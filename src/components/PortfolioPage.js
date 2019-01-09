import React from 'react';

const PortfolioPage = (props) =>  {
  console.log(props);
  return (
  <div>
    <h1>This is my Portfolio Portfolio Page</h1>
    <p>Here i can show you my {props.match.params.id} item</p>
  </div>
  );
};

export default PortfolioPage;