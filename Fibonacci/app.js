document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('fibonacci');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const numUser = document.getElementById('numUser');
        const n = 100;
        const result = fibonacci(n, numUser);

        console.log(result);
    });

    function fibonacci(n, numUser) {
        let numeros = [0, 1];
        for (let i = 2; i < n; i++) {
            if (numeros[i] === numUser) {
                return document.getElementById('outPutFibonacci').innerHTML = 'Elemento encontrado dentro de la lista';
            }
            numeros[i] = numeros[i - 1] + numeros[i - 2];

        }
        document.getElementById('outPutFibonacci').innerHTML = 'Elemento no encontrado dentro de la lista';
        return numeros.slice(0, n);
    }
});
