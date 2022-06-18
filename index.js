/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let myUnit = document.getElementById("unit-value")
let convertBtn = document.getElementById("convert-btn")
let lengthDisplay = document.getElementById("length-display")
let volumeDisplay = document.getElementById("volume-display")
let massDisplay = document.getElementById("mass-display")

const feet = 3.281
const gallon = 0.264
const pound = 2.204
let feetCalc = 3.281
let gallonCalc = 0.264
let poundCalc = 2.204

convertBtn.addEventListener("click", function () {
    lengthDisplay.textContent = `${myUnit.value} meters = ${metricToImperial(feetCalc, myUnit.value, feet)} feet | 
    ${myUnit.value} feet = ${imperialToMetric(feetCalc, myUnit.value, feet)} meters`
    
    volumeDisplay.textContent = `${myUnit.value} liters = ${metricToImperial(gallonCalc, myUnit.value, gallon)} gallons | 
    ${myUnit.value} gallons = ${imperialToMetric(gallonCalc, myUnit.value, gallon)} liters`
    
    massDisplay.textContent = `${myUnit.value} kilograms = ${metricToImperial(poundCalc, myUnit.value, pound)} pounds | 
    ${myUnit.value} pounds = ${imperialToMetric(poundCalc, myUnit.value, pound)} kilograms`
})

function metricToImperial(value, num, measure) {
    value = num * measure
    value = value.toFixed(3)
    return value
}

function imperialToMetric(value, num, measure) {
    value = num / measure
    value = value.toFixed(3)
    return value
}