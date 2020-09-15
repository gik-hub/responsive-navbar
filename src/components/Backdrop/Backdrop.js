import React from "react";
import "./backdrop.scss";

function Backdrop({ click }) {
  return <div className="backdrop" onClick={click} />;
}

export default Backdrop;
