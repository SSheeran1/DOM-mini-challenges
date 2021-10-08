"use strict";
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutButton = document.querySelector(".peanut");
const chocolateButton = document.querySelector(".chocolate");
const gummieButton = document.querySelector(".gummie");
const vendingMachineButtons = document.querySelectorAll(".button");

let total = 0;

// colaButton.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// peanutButton.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// chocolateButton.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// gummieButton.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
vendingMachineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.getAttribute("data-amount");
    total += parseInt(amount);
    totalParagraph.textContent = `Total: $${total}.00`;
  });
});

// _____________________________________________________________________________________

const moneyForm = document.querySelector(".money-form");
const moneyContainer = document.querySelector(".money-container");
// .count= .how-many
// .type= .what-coin
// .coin-container=.money container

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const count = document.querySelector("#how-many").value;
  const type = document.querySelector("#what-coin").value;
  //   console.log(type, count);
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", type);
    newCoin.addEventListener("click", () => {
      newCoin.style.display = "none";
      // newCoin.remove();
    });
    moneyContainer.append(newCoin);
  }
});
// count

// ___________________________________________________________________________________________________________

const lightBulb = document.querySelector(".light-bulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");

onSwitch.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});

offSwitch.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleSwitch.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});

endSwitch.addEventListener("click", () => {
  lightBulb.remove();
  onSwitch.disabled = true;
  offSwitch.disabled = true;
  toggleSwitch.disabled = true;
  endSwitch.disabled = true;
});
