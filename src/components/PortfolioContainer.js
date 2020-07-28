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
        const App = () => <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;      
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <NavSections currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioContainer;
