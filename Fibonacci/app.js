document.addEventListener('DOMContentLoaded', (event) => {
    const n = 100;
    const fibonacciSequence = generateFibonacciSequence(n);

    const formulario = document.getElementById('fibonacci');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const numUser = parseInt(document.getElementById('numUser').value);
        const result = searchInFibonacciSequence(fibonacciSequence, numUser);

        if (result) {
            console.log(result);
            document.getElementById('outPutFibonacci').innerHTML = 'Elemento encontrado dentro de la lista';
        } else {
            document.getElementById('outPutFibonacci').innerHTML = 'Elemento no encontrado dentro de la lista';
        }
    });

    function generateFibonacciSequence(n) {
        let numeros = [0, 1];
        for (let i = 2; i <= n; i++) {
            numeros[i] = numeros[i - 1] + numeros[i - 2];
        }
        return numeros;
    }

    function searchInFibonacciSequence(sequence, numUser) {
        return sequence.includes(numUser);
    }
});
