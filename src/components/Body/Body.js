import React, { useState } from 'react';
import ProductList from './ProductContent/ProductList';
import './Body.css';
import SortDropdown from '../SideBar/SortDropdown';
import SideBar from '../SideBar/SideBar';
import { isMobile } from 'react-device-detect';

const Body = ({ searchQuery, onLikeProduct }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [sortOption, setSortOption] = useState('RECOMMENDED');

  const sideBarclassName = isSideBarOpen
    ? 'col-md-2 d-flex flex-wrap'
    : 'd-flex justify-content-between';

  const mainclassName = isSideBarOpen ? 'col-md-10' : 'col-md-12';
  const filterBtnClass = isMobile
    ? 'className="col-md-12 d-flex justify-content-center'
    : 'className="col-md-12 d-flex justify-content-between';

  const handleSideBarClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="row">
      <div className={filterBtnClass}>
        {!isMobile ? (
          isSideBarOpen ? (
            <u onClick={handleSideBarClick}>&lt; Hide Filter</u>
          ) : (
            <u onClick={handleSideBarClick}>Show Filter &gt;</u>
          )
        ) : isSideBarOpen ? (
          <button
            type="button"
            style={{ width: '5rem', justifyContent: 'center !important' }}
            className="btn btn-light"
            onClick={handleSideBarClick}
          >
            Close
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-light"
            style={{ width: '5rem' }}
            onClick={handleSideBarClick}
          >
            Filter
          </button>
        )}
        <SortDropdown onSortChange={handleSortChange} />
      </div>

      <div className={sideBarclassName}>{isSideBarOpen && <SideBar />}</div>

      <div className={mainclassName}>
        <ProductList
          searchValue={searchQuery}
          sortOption={sortOption}
          onLikeProduct={onLikeProduct}
        />
      </div>
    </div>
  );
};

export default Body;
