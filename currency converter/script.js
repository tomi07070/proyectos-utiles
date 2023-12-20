const number = document.getElementById('value');
const change = document.getElementById('opciones1');
const to = document.getElementById('opciones2');
const submit = document.getElementById('btn');
const resultadoElement = document.getElementById('resultado');

submit.addEventListener('click', function () {
    converter();
});

function converter() {
    const value = parseFloat(number.value);
    const change1 = change.value;
    const toChange = to.value;

    let tasaDeCambio;

    const tasasDeCambio = {
        opcion1: {
            opcion2: 0.021,
            opcion3: 0.0012,
            opcion4: 0.0011,
            opcion5: 0.00099,
            opcion6: 0.18,
        },
        opcion2: {
            opcion1: 46,
            opcion3: 0.058,
            opcion4: 0.053,
            opcion5: 0.046,
            opcion6: 8.33,
        },
        opcion3: {
            opcion1: 791.34,
            opcion2: 17.20,
            opcion4: 0.92,
            opcion5: 0.79,
            opcion6: 142.95,
        },
        opcion4: {
            opcion1: 863.23,
            opcion2: 18.94,
            opcion3: 1.09,
            opcion5: 0.86,
            opcion6: 156.14,
        },
        opcion5: {
            opcion1: 1014.69,
            opcion2: 21.71,
            opcion3: 1.26,
            opcion4: 1.16,
            opcion6: 180.70,
        },
        opcion6: {
            opcion1: 5.61,
            opcion2: 0.12,
            opcion3: 0.0070,
            opcion4: 0.0064,
            opcion5: 0.0055,
        },
    };

    if (tasasDeCambio[change1] && tasasDeCambio[change1][toChange]) {
        tasaDeCambio = tasasDeCambio[change1][toChange];
    } else {
        resultadoElement.innerHTML = 'ERROR: La tasa de cambio no existe';
        return;
    }

    const resultado = value * tasaDeCambio;

    // Usar resultadoElement en lugar de resultado

    resultadoElement.innerHTML = `Converted value: ${resultado.toFixed(2)}`;
}
