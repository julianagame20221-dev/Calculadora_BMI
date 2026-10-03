function calculateBMI() {
    // 1. Obtenemos los valores. Usamos parseFloat para asegurar que sean números con decimales.
    const weight = parseFloat(document.getElementById("weight").value);

    // Convertimos CM a Metros dividiendo por 100 inmediatamente
    const height = parseFloat(document.getElementById("height").value) / 100;

    const resultElement = document.getElementById("result");

    // 2. Validación: Verificamos que ambos datos existan y sean números reales
    if (weight && height) {

        // 3. Aplicamos la fórmula: Peso dividido por altura al cuadrado
        let bmi = weight / (height * height);

        // 4. Redondeamos a 2 decimales usando .toFixed(2)
        bmi = bmi.toFixed(2);

        // 5. Mostramos el resultado
        resultElement.style.color = "#333";
        resultElement.textContent = `Tu BMI es: ${bmi}`;

    } else {
        // Manejo de error
        resultElement.style.color = "red";
        resultElement.textContent = "Por favor, introduce valores válidos. ⚠️";
    }
}
