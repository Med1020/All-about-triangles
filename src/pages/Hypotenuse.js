import React, { useState } from "react";

function Hypotenuse() {
  var [side1, setSide1] = useState();
  var [side2, setSide2] = useState();
  var [side3, setSide3] = useState();
  let enabled = side1 > 0 && side2 > 0;

  const handleClick = () => {
    side1 = Number(side1);
    side2 = Number(side2);
    side3 = Number(side3);
    setSide3(Math.sqrt(side1 * side1 + side2 * side2).toFixed(2));
  };
  return (
    <>
      <div className="hypotenuse page">
        <h1>Hypotenuse</h1>
        <label htmlFor="first-side">
          Enter the length of one side of triangle
        </label>
        <br />
        <input
          id="first-side"
          onChange={(e) => {
            if (e.target.value > 0) {
              setSide1(e.target.value);
            } else {
              setSide3(0);
            }
          }}
          autocomplete="off"
          required
        />
        <br />
        <label htmlFor="second-side">
          Enter the length of other side of the triangle
        </label>
        <br />
        <input
          id="second-side"
          onChange={(e) => {
            if (e.target.value > 0) {
              setSide2(e.target.value);
            } else {
              setSide3(0);
            }
          }}
        />
        <br />
        <div className="output">Length of third side must be: {side3}</div>
        <button
          className="btn"
          onClick={() => {
            handleClick();
          }}
          disabled={!enabled}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Hypotenuse;
