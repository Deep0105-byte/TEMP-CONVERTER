document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    


    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsius)) {
            const fahrenheitResult = (celsius * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheitResult.toFixed(2);
        } else if (!isNaN(fahrenheit)) {
            const celsiusResult = (fahrenheit - 32) * 5 / 9;
            celsiusInput.value = celsiusResult.toFixed(2);
        }
    });
});
