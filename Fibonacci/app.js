document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('fibonacci');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const numUser = parseInt(document.getElementById('numUser').value);
        const n = 100;
        const result = fibonacci(n, numUser);

        const outputElement = document.getElementById('outputFibonacci');
        outputElement.innerHTML = result ? 'Elemento encontrado dentro de la lista' : 'Elemento no encontrado dentro de la lista';
    });

    function fibonacci(n, numUser) {
        let numeros = [0, 1];
        for (let i = 2; i <= n; i++) {
            numeros[i] = numeros[i - 1] + numeros[i - 2];
            if (numeros[i] === numUser) {
                return true;
            }
        }
        return false;
    }
});
