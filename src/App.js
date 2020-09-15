import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Sidedrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  let backDrop;

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const backdropClick = () => {
    setDrawerOpen(false);
  };

  if (drawerOpen) {
    backDrop = <Backdrop click={backdropClick} />;
  }

  return (
    <div style={{ height: "100vh" }}>
      <Toolbar toggleDrawer={toggleDrawer} />
      <Sidedrawer shown={drawerOpen} />
      {backDrop}
      <main style={{ marginTop: "50px" }}>
        <p>this is the page content</p>
      </main>
    </div>
  );
}

export default App;
