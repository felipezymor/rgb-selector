"use-strict";

window.addEventListener("load", () => {
  var colorBox = document.querySelector("#colorBox"),
    red = document.querySelector("#red"),
    green = document.querySelector("#green"),
    blue = document.querySelector("#blue"),
    redValue = document.querySelector("#redValue"),
    greenValue = document.querySelector("#greenValue"),
    blueValue = document.querySelector("#blueValue"),
    hex_out = document.querySelector("#hex");

  function setColor() {
    var r_hex = parseInt(red.value, 10).toString(16),
      g_hex = parseInt(green.value, 10).toString(16),
      b_hex = parseInt(blue.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
    colorBox.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    hex_out.value = hex.toUpperCase();
  }

  function pad(n) {
    return n.length < 2 ? "0" + n : n;
  }

  red.addEventListener("change", () => {
    setColor();
    redValue.value = red.value;
  });

  red.addEventListener("input", () => {
    redValue.value = red.value;
  });

  green.addEventListener("change", () => {
    setColor();
    greenValue.value = green.value;
  });

  green.addEventListener("input", () => {
    greenValue.value = green.value;
  });

  blue.addEventListener("change", () => {
    setColor();
    blueValue.value = blue.value;
  });

  blue.addEventListener("input", () => {
    blueValue.value = blue.value;
  });
});
