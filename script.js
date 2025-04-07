// Exchange rates (as of current rates, you can replace them with real API data)
const exchangeRates = {
    "USD": { "EUR": 0.92, "GBP": 0.75, "INR": 82.25 },
    "EUR": { "USD": 1.09, "GBP": 0.82, "INR": 89.50 },
    "GBP": { "USD": 1.33, "EUR": 1.22, "INR": 108.05 },
    "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0092 }
};

// Function to convert currency
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (fromCurrency === toCurrency) {
        alert("The currencies are the same!");
        return;
    }

    // Conversion logic
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
}

// Event listener for the Convert button
document.getElementById("convertButton").addEventListener("click", convertCurrency);
