import React, { useState, useEffect, useRef } from "react";
import "./MobileSideBar.css";

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (callback) => {
    setIsOpen(false);
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <div id="main" style={{ float: "right" }}>
        <button className="scroll-button" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
      {isOpen && (
        <div className="mobile-sidebar" ref={sidebarRef}>
          <div className="sidebar-options">
            <p
              style={{ backgroundColor: "#f0f0f0" }}
              onClick={() => handleOptionClick()}
            >
              SHOP
            </p>
            <p onClick={() => handleOptionClick()}>SKILLS</p>
            <p onClick={() => handleOptionClick()}>STORIES</p>
            <p onClick={() => handleOptionClick()}>ABOUT</p>
            <p onClick={() => handleOptionClick(onContactUsClick)}>
              CONTACT US
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSideBar;
