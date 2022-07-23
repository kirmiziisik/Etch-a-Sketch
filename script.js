"use strict";

const container = document.querySelector(".container");
const button = document.querySelector(".new");
let simpleDiv;

const getRandomRGB = function () {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  //Random RGB color
  return `rgb(${r},${g},${b})`;
};

const setGrid = function () {
  simpleDiv = document.createElement("div");
  simpleDiv.classList.add("simpleDiv");
  simpleDiv.style.border = "1px solid black";
  container.appendChild(simpleDiv);
};

for (let i = 0; i < 256; i++) {
  setGrid();
}

const colorBoxes = function () {
  const eachDiv = document.querySelectorAll(".simpleDiv");
  eachDiv.forEach((item) =>
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = `${getRandomRGB()}`;
    })
  );
};

colorBoxes();

//Create new grid when the button is clicked, and color again.
button.addEventListener("click", function () {
  container.innerHTML = "";
  const numSquares = Number(prompt("Enter the number of squares per side for the new grid (max:100)"));
  if (numSquares <= 100) {
    container.style.gridTemplateColumns = `repeat(${numSquares},1fr)`;

    for (let i = 0; i < numSquares ** 2; i++) {
      setGrid();
    }
    colorBoxes();
  }
});
