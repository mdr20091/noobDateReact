//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";

const name = "matthew";
const date = new Date().getFullYear();

ReactDom.render(
  <div>
    <h1> created by {name}</h1>
    <p>
      Is at purse tried jokes china ready decay an. Small its shy way had woody
      downs power. To denoting admitted speaking learning my exercise so in.
      Procured shutters mr it feelings. To or three offer house begin taken am
      at. As dissuade cheerful overcame so of friendly he indulged unpacked.
      Alteration connection to so as collecting me. Difficult in delivered
      extensive at direction allowance. Alteration put use diminution can
      considered sentiments interested discretion. An seeing feebly stairs am
      branch income me unable.
    </p>
    <footer>Copyright {date} created by Matthew Rodriguez</footer>
  </div>,
  document.getElementById("root")
);
