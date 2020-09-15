import React from "react";
import DrawerToggleBtn from "../SideDrawer/DrawerToggelBtn";
import "./toolbar.scss";

function Toolbar({ toggleDrawer }) {
  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div className="toolbar__toggle-btn">
          <DrawerToggleBtn toggleDrawer={toggleDrawer} />
        </div>
        <div className="toolbar__logo">the logo</div>
        <div className="toolbar__nav-items">
          <ul>
            <li>
              <a href="/#">navigation 1</a>
            </li>
            <li>
              <a href="/#">navigation 1</a>
            </li>
            <li>
              <a href="/#">navigation 1</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
