import React from "react";

export default function Checkbox(props) {
  const { value, changeValue, label } = props;

  return (
    <div>
      <input
        type="checkbox"
        id={label}
        checked={value}
        onChange={()=>changeValue(label)}
      />
      <label>Include {label}</label>
    </div>
  );
}
