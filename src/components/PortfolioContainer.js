import React, { useState } from 'react';

import NavSections from './NavSections';

import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('AboutMe');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
        // const App = () => <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;      
      default:
        return <AboutMe />;
    }
  };

  return (
    <header>
      <h2>
          <a href="/">
              <span role="img" aria-label=""></span>Asa Katarina's Porfolio
          </a>
      </h2>
      <nav>
        <div>
          <NavSections currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>{renderPage(currentPage)}</div>
        </div>
      </nav>
    </header>
  );
}

export default PortfolioContainer;
