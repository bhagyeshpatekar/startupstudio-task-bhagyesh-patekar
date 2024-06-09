import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./SortDropDown.css";

const SortDropdown = ({ onSortChange }) => {
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "NEWEST FIRST",
    "RECOMMENDED",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
    onSortChange(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option}
            eventKey={option}
            active={option === selected}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
