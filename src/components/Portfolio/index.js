// import React from "react";
import React, { useState } from 'react';
import PortfolioApplicationCard from './PortfolioApplicationCard';
import Wrapper from './Wrapper';
import portfolioApplications from './portfolioApplications.json';
// import "./style.css";

function Portfolio() {
  const [portfolioApplicationsList, setPortfolioApplicationList] = useState(portfolioApplications);

   return (
    <Wrapper>
      <p>____________________________</p>
      <h5 className="title">Portfolio Applications</h5>
      <p>_____________________________</p>
      {portfolioApplicationsList.map(portfolioApplication => (
        <PortfolioApplicationCard
          id={portfolioApplication.id}
          key={portfolioApplication.id}
          name={portfolioApplication.name}
          image={portfolioApplication.image}
          email={portfolioApplication.email}
          message={portfolioApplication.message}
        />
      ))}
    </Wrapper>
  );
}

// // -- tester
    // const Portfolio = () => (
    //   <div>
    //     <h1>Applications</h1>
    //     <p>
    //       in work..
    //     </p>
    //   </div>
    // );

export default Portfolio;