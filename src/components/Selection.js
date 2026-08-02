import React, { useState } from "react";
import '../styles/Child.css';

function Selection({ applyColor }) {
  const [selectionStyle, setSelectionStyle] = useState({});

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(setSelectionStyle)}
    >
        <h5 className="subheading">Selection</h5>
    </div>
  );
}

export default Selection;
