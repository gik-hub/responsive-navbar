import React from "react";
import { BiMenu } from "react-icons/all";
function DrawerToggelBtn({ toggleDrawer }) {
  return (
    <button onClick={toggleDrawer}>
      <BiMenu />
    </button>
  );
}

export default DrawerToggelBtn;
