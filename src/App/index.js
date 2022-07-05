import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import langList from "../constant/langLiast";
import { RecoTest } from "../APIrecognize/recognize";

import "./module.css";
export default function App() {
  const [url, setUrl] = useState([]);
  const [text, setText] = useState("");
  const langSelect = (e) => {
    let target = e.target;

    while (!target.classList.contains("btn")) {
      target = target.parentNode;
    }
    console.log(target);
    setText("loading");
    RecoTest(url, target.value).then((res) => {
      setText(res.data.ParsedResults[0].ParsedText);
    });
  };
  return (
    <div className="app">
      <div className="interface">
        <h2>Choose text language</h2>
        <input value={url} onChange={(e) => setUrl(e.target.value)} />

        {Object.keys(langList).map((item, idx) => {
          return (
            <Button
              val={langList[item].val}
              key={`${langList[item].val}${idx}`}
              language={langList[item].language}
              caption={langList[item].caption}
              langSelect={langSelect}
            />
          );
        })}
        <span className="caption sponsor">
          Powered by
          <a
            href="https://ocr.space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OCR.space OCR API
          </a>
        </span>
      </div>
      <div className="results"> {text}</div>
    </div>
  );
}
