document.getElementById("convertButton").addEventListener("click", function() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    let result;

    if (unitSelect === "celsius") {
        result = (temperatureInput - 32) * 5/9;
        document.getElementById("result").textContent = `${temperatureInput} °F is ${result.toFixed(2)} °C`;
    } else {
        result = (temperatureInput * 9/5) + 32;
        document.getElementById("result").textContent = `${temperatureInput} °C is ${result.toFixed(2)} °F`;
    }
});
