import React from "react";

export const ButtonReset = ({ onReset, label }) => {
  return (
    <button type="button" name="Reset" onClick={onReset}>
      {label}
    </button>
  );
};
