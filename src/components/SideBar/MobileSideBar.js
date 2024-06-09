import React, { useState, useEffect, useRef } from 'react';
import './MobileSideBar.css';

const MobileSideBar = ({ onContactUsClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div id="main" style={{ float: 'right' }}>
        <button className="scroll-button" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
      {isOpen && (
        <div className="mobile-sidebar" ref={sidebarRef}>
          <div className="sidebar-options">
            <p style={{ backgroundColor: '#f0f0f0' }}>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p onClick={onContactUsClick}>CONTACT US</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSideBar;
