import React, { useState } from "react";
import '../styles/Child.css';

function Selection({ applyColor }) {

    const [selectionStyle, setSelectionStyle] = useState({
    background: "",
  });

  return (
    <>
      <div
        className="fix-box"
        style={selectionStyle}
        onClick={() => applyColor(setSelectionStyle)}
      >
         <h3 className="subheading">Selection</h3>
      </div>
    </>
  );
}

export default Selection;
