import React, { useState } from "react";

function Area() {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  let enabled = base > 0 && height > 0;

  const handleSubmit = () => {
    setArea(((base * height) / 2).toFixed(2));
  };
  return (
    <>
      <div className="area page">
        <h1>Area of a Triangle</h1>
        <div className="main">
          <label htmlFor="base">Enter the length of base of the triangle</label>
          <br />
          <input
            id="base"
            type="number"
            onChange={(e) => {
              if (e.target.value >= 0) {
                setError("");
                setBase(e.target.value);
              } else if (e.target.value === null) {
                setError("");
              } else {
                setBase(e.target.value);
                setError("*Value cannot be negative");
              }
            }}
          />
          <br />
          <div style={{ color: "red" }}>{error}</div>

          <br />
          <label htmlFor="height">
            Enter the length of height of the triangle
          </label>
          <br />
          <input
            id="height"
            type="number"
            onChange={(e) => {
              if (e.target.value >= 0) {
                setError1("");
                setHeight(e.target.value);
              } else if (isNaN(e.target.value)) {
                setError1("");
              } else {
                setHeight(e.target.value);
                setError1("*Value cannot be negative");
              }
            }}
          />
          <br />
          <div style={{ color: "red" }}>{error1}</div>
        </div>
        <div className="output">Area of the triangle is: {area} unit^2</div>
        <button
          onClick={() => handleSubmit()}
          className="btn"
          disabled={!enabled}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Area;
