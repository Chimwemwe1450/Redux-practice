import React from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "./store/auth-slice";
const Header = () => {
  const dispatch = useDispatch();
const logout = ()=>{
  dispatch(authActions.logout());
}
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
          Webstore 100
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button  onClick={logout}className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
