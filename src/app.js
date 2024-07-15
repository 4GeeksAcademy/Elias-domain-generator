/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*Your code here*/
  let pronouns = ["the", "My", "Your"];
  let adjs = ["great", "big", "blue"];
  let nouns = ["jogger", "racoon", "pc"];
  let domains = [".com", ".net", ".us", ".io"];

  function posiblesCombinaciones(pronouns, adjs, nouns, domains) {
    let combinaciones = [];

    for (let p = 0; p < pronouns.length; p++) {
      for (let a = 0; a < adjs.length; a++) {
        for (let n = 0; n < nouns.length; n++) {
          for (let d = 0; d < domains.length; d++) {
            // Iterate over domain extensions
            combinaciones.push(
              `${pronouns[p]}${adjs[a]}${nouns[n]}${domains[d]}`
            );
          }
        }
      }
    }

    return combinaciones;
  }

  const button = document.getElementById("generate-button");
  const resultList = document.getElementById("result-list");

  button.addEventListener("click", () => {
    resultList.innerHTML = "";

    let combinaciones = posiblesCombinaciones(pronouns, adjs, nouns, domains); // Pass the domains array to the function

    combinaciones.forEach(combinacion => {
      let listItem = document.createElement("li");
      listItem.textContent = combinacion;
      resultList.appendChild(listItem);
    });
  });
};
