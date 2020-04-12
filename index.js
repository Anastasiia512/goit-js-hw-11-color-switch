"use strict";
import { colors } from "./colors.js";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

let isActive = false;
let timer;

const changeColor = function () {
  if (!isActive) {
    timer = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
        isActive = true;
    },1000);
  }
};

const stopChangeColor = function () {
  clearInterval(timer);
  isActive = false;
};

buttonStart.addEventListener("click", changeColor);
buttonStop.addEventListener("click", stopChangeColor);
