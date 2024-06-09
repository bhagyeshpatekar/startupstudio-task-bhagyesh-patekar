import React, { useState, useRef } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/MainHeader/Header';
import SubHeader from './components/Header/SubHeader/SubHeader';
import Body from './components/Body/Body';

const App = () => {
  const footerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleContactUsClick = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header
        onContactUsClick={handleContactUsClick}
        onSearchChange={handleSearchChange}
      />
      <div className="p-5">
        <SubHeader />
        <main>
          <Body searchQuery={searchQuery} />
        </main>
      </div>
      <footer>
        <Footer ref={footerRef} />
      </footer>
    </div>
  );
};

export default App;
