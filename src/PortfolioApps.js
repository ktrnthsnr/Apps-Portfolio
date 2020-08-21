//import React from "react";
import React, { useState } from 'react';
import PortfolioContainer from "./components/PortfolioContainer";

// add card 
import PortfolioApplicationCard from './components/PortfolioApplicationCard';
import Wrapper from './components/Wrapper';
import portfolioAppss from './portfolioAppss.json';
import './App.css';

function PortfolioApps() {
  const [portfolioAppssList, setPortfolioApplicationsList] = useState(portfolioAppss);
  const removePortfolioApplication = id => {
    const newList = portfolioAppssList.filter(portfolioApps => portfolioApps.id !== id);
    setPortfolioApplicationsList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Portfolio Applications</h1>
      <p></p>
      {portfolioAppssList.map(portfolioApps => (
        <PortfolioApplicationCard
          removePortfolioApplication={removePortfolioApplication}
          id={portfolioApps.id}
          key={portfolioApps.id}
          name={portfolioApps.name}
          image={portfolioApps.image}
          websiteurl={portfolioApps.websiteurl}
          github={portfolioApps.github}
        />
      ))}
    </Wrapper>
  );
}

// export
export default PortfolioApps;