import React from "react";
import "./Button.css";
import { getIcon } from "../../constant/getIcon";
export default function Button({ val, language, caption, langSelect }) {
  return (
    <button value={val} onClick={langSelect} className="btn">
      {getIcon(val)}

      <span className="label">{language}</span>

      {caption && <span className="caption">{caption}</span>}
    </button>
  );
}
