const typingZone = document.querySelector("textarea");
const answerZone = document.querySelector(".morsed");
const outcome = document.querySelector(".outcome");
const tooltip = document.querySelector(".tooltip");
const morseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": " / ",
  ".": ".-.-.-",
  "?": "..--..",
  "!": "-.-.--",
  ",": "--..--",
  ":": "---...,",
};
const keys = Object.keys(morseAlphabet);
const inclusive = [
  "Backspace",
  "Home",
  "End",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Enter",
  "Shift",
  "Alt",
];

typingZone.addEventListener("keydown", (e) => {
  if (!keys.includes(e.key.toUpperCase()) && !inclusive.includes(e.key)) {
    tooltip.style.display = "inherit";
    e.preventDefault();
  }
});

typingZone.addEventListener("input", (e) => {
  const input = typingZone.value.toUpperCase();
  tooltip.style.display = "none";
  outcome.style.display = input.length ? "inherit" : "none";
  if (e.inputType == "deleteContentBackward") {
    deleteText(input);
    return;
  }
  convertToMorse(e.data.toUpperCase());
});

const convertToMorse = (key) => {
  answerZone.textContent += `${morseAlphabet[key]} `;
};

const deleteText = (input) => {
  answerZone.textContent = "";
  for (let i = 0; i < input.length; i++) {
    answerZone.textContent += `${morseAlphabet[input[i]]} `;
  }
};
