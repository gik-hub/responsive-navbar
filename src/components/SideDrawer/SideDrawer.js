import React from "react";
import "./sidedrawer.scss";

function SideDrawer({ shown }) {
  let draweClasses = shown ? "side-drawer open" : "side-drawer close";
  return (
    <nav className={draweClasses}>
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
    </nav>
  );
}

export default SideDrawer;
