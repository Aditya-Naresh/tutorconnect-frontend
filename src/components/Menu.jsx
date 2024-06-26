import React from "react";
import Logout from "./Logout";
import { toggleMenu } from "../redux/slices/profileSlice"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
    const dispatch = useDispatch()
  return (
    <div
      className="py-1"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      
    >
      <Link
        to={"/profile"}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Account
      </Link>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Wallet
      </a>
      <Logout />
    </div>
  );
};

export default Menu;
