import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import './SideBar.css';

const Sidebar = () => {
  const sections = [
    'OCCASION',
    'WORK',
    'FABRIC',
    'SEGMENT',
    'SUITABLE FOR',
    'RAW MATERIALS',
    'PATTERN',
  ];

  const initialVisibilityState = sections.reduce((acc, section) => {
    acc[section] = true;
    return acc;
  }, {});

  const [visibleSections, setVisibleSections] = useState(
    initialVisibilityState
  );
  const [checkboxes, setCheckboxes] = useState({
    customizable: false,
    men: false,
    women: false,
    kids: false,
  });

  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const unselectAll = () => {
    setCheckboxes({
      customizable: false,
      men: false,
      women: false,
      kids: false,
    });
  };

  return (
    <div className="col-md-12">
      <br />
      <br />
      <div className="sidebar-border checkbox-style dropdown-content">
        <input
          type="checkbox"
          id="customizable"
          name="customizable"
          checked={checkboxes.customizable}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="customizable">
          <b>&nbsp; CUSTOMIZABLE</b>
        </label>
      </div>
      <br />

      <div>
        <div
          className="d-flex justify-content-between"
          onClick={() => toggleVisibility('IDEAL FOR')}
        >
          <b>IDEAL FOR</b>
          {visibleSections['IDEAL FOR'] ? <ChevronUp /> : <ChevronDown />}
        </div>
        {visibleSections['IDEAL FOR'] && (
          <>
            <div className="d-flex dropdown-content">All</div>
          </>
        )}
        <br></br>
      </div>

      <div className="sidebar-border">
        <div className="d-flex dropdown-content">
          <u onClick={unselectAll}>Unselect All</u>
        </div>
        <div className="checkbox-style dropdown-content">
          <input
            type="checkbox"
            id="men"
            name="men"
            checked={checkboxes.men}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="men">&nbsp; Men</label>
        </div>
        <div className="checkbox-style dropdown-content">
          <input
            type="checkbox"
            id="women"
            name="women"
            checked={checkboxes.women}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="women">&nbsp; Women</label>
        </div>
        <div className="checkbox-style dropdown-content">
          <input
            type="checkbox"
            id="kids"
            name="kids"
            checked={checkboxes.kids}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="kids">&nbsp; Baby & Kids</label>
        </div>
        <br />
      </div>

      {sections.map((section) => (
        <div key={section} className="sidebar-border">
          <div
            className="d-flex justify-content-between"
            onClick={() => toggleVisibility(section)}
          >
            <b>{section}</b>
            {visibleSections[section] ? <ChevronUp /> : <ChevronDown />}
          </div>
          {visibleSections[section] && (
            <>
              <div className="d-flex dropdown-content">All</div>
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
