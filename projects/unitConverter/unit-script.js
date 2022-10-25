const inputEl = document.getElementById("input_el");
const converBtn = document.getElementById("convert_btn");
const lengthEl = document.getElementById("length_el");
const volumeEl = document.getElementById("volume_el");
const massEl = document.getElementById("mass_el");
const clearBtn = document.getElementById("clear_btn");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

converBtn.addEventListener("click", function () {
    let inputValue = inputEl.value;
    console.log(inputValue);
    lengthEl.textContent = `${inputValue} meter = ${(
        inputValue * meterToFeet
    ).toFixed(3)} feet | ${inputValue} feet = ${(
        inputValue / meterToFeet
    ).toFixed(3)} feet`;
    volumeEl.textContent = `${inputValue} liters = ${(
        inputValue * literToGallon
    ).toFixed(3)} gallons | ${inputValue} gallons = ${(
        inputValue / literToGallon
    ).toFixed(3)} liters`;
    massEl.textContent = `${inputValue} kilograms = ${(
        inputValue * kiloToPound
    ).toFixed(3)} pounds | ${inputValue} pounds = ${(
        inputValue / kiloToPound
    ).toFixed(3)} kilos`;
});
