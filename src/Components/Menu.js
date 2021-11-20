import React from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Menu() {
  return (
    <menu>
      <img src={logo} alt="" srcset="" />

      <ul>
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
