const button = document.querySelector("#colorBtn");
const container = document.querySelector("#app");
const container2 = document.querySelector("#app2");
const hexValue = document.querySelector("#hex-value");


const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];

function randomHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length); // 12
    hex += hexValues[randomIndex]; //#48C
  }
  return hex;
}

function generateHex() {
  console.log({ generateHex });
  const random = randomHex();
  hexValue.innerHTML = random;
  container.style.backgroundColor = random;
}

function generatePallete() {
  const colors = randomColor({
    count: 5,
    hue: randomHex(),
  });

  for (let i = 0; i < colors.length; i++) {
    const node = document.createElement("div");
    node.setAttribute("id", `pallete-${i}`);
    node.setAttribute("class", "pallete");
    node.style.backgroundColor = colors[i];
    node.innerHTML = `<p class="text-center color-info">${colors[i]}</p>`;

    container2.appendChild(node);
  }
}
window.onload = function () {
  generatePallete();
};

function setRandomColor() {
  const colors = randomColor({
    count: 5,
    hue: randomHex(),
  });

  for (let i = 0; i < colors.length; i++) {
    const node = document.querySelector(`#pallete-${i}`);
    node.style.backgroundColor = colors[i];
    node.childNodes[0].innerHTML = colors[i];
  }
}
