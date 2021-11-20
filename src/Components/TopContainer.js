import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";

function TopContainer() {
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search items, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src="" alt="" />
        </div>
        <p className="profileName">Vetrivel Ravi</p>
        <i className="menuChevron">
          <FaChevronDown />
        </i>
      </div>
    </div>
  );
}

export default TopContainer;
