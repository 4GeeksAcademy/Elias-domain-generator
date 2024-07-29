/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function() {

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

    let combinaciones = posiblesCombinaciones(pronouns, adjs, nouns, domains);

    combinaciones.forEach(combinacion => {
      let listItem = document.createElement("li");
      listItem.textContent = combinacion;
      resultList.appendChild(listItem);
    });
  });
};
