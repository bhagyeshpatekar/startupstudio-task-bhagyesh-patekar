import React, { useState } from "react";
import "./Header.css";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import logo from "../../images/logo.png";
import { MdOutlineCancel } from "react-icons/md";
import startUpStudiologo from "../../images/startUpStudiologo.png";
import { isMobile } from "react-device-detect";
import MobileSideBar from "../../SideBar/MobileSideBar";

const Header = ({ onSearchChange, onContactUsClick }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleSearchClick = () => {
    if (isSearch) {
      setSearchQuery("");
      onSearchChange("");
    }
    setIsSearch(!isSearch);
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 text-start d-flex">
            {isMobile ? (
              <>
                <div className="col-2">
                  <MobileSideBar onContactUsClick={onContactUsClick} />
                </div>
                <div className="col-2" style={{ paddingTop: "0.2rem" }}>
                  <img src={logo} alt="Logo" className="img-fluid" />
                </div>
              </>
            ) : (
              <img src={logo} alt="Logo" className="img-fluid" />
            )}
          </div>
          <div className="col-4 text-center">
            <img
              src={startUpStudiologo}
              alt="StartUpStudio"
              className="img-fluid startup-studio"
            />
          </div>
          <div
            className={isMobile ? "col-4 text-end d-flex" : "col-4 text-end"}
          >
            {isSearch && (
              <input
                type="text"
                className="form-control input-field"
                placeholder="Search Item"
                value={searchQuery}
                onChange={handleInputChange}
              />
            )}
            {!isSearch ? (
              <BsSearch
                className={!isMobile && "me-2"}
                onClick={handleSearchClick}
              />
            ) : (
              <MdOutlineCancel
                className={!isMobile && "me-2"}
                onClick={handleSearchClick}
              />
            )}
            {!isMobile ? (
              <>
                <BsHeart className="me-2" />
                <BsBag className="me-2" />
                <BiUser className="me-2" />
                <button type="button" className="dropdown-toggle btn btn-light">
                  ENG
                </button>
              </>
            ) : (
              <>
                <BsHeart />
                <BsBag />
              </>
            )}
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto options">
              <p>SHOP</p>
            </div>
            <div className="col-auto options">
              <p>SKILLS</p>
            </div>
            <div className="col-auto options">
              <p>STORIES</p>
            </div>
            <div className="col-auto options">
              <p>ABOUT</p>
            </div>
            <div className="col-auto options" onClick={onContactUsClick}>
              <p>CONTACT US</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
