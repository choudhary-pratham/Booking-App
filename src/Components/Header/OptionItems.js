import React from "react";

export default function OptionItems(props) {
  const handleOption = (text, op) => {
    props.setOptions((prevState) => {
      return {
        ...prevState,
        [text]: op === "d" ? props.options[text] - 1 : props.options[text] + 1,
      };
    });
  };
  return (
    <div className="option--items">
      <span className="option--text">{props.text}</span>
      <div className="option--counter">
        <button
          disabled={
            props.text === "Children"
              ? props.options[props.text] <= 0
              : props.options[props.text] <= 1
          }
          className="option--counter--button"
          onClick={() => handleOption(props.text, "d")}
        >
          -
        </button>
        <span className="option--counter--number">
          {props.options[props.text]}
        </span>
        <button
          className="option--counter--button"
          onClick={() => handleOption(props.text, "i")}
        >
          +
        </button>
      </div>
    </div>
  );
}
