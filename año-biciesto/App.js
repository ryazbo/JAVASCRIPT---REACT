document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('year');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const añoUser = document.getElementById('añoUser').value;


        console.log('año:', añoUser);

        yearcontroller( añoUser )

        function yearcontroller( year ){

        var isBisi = 0; 

        if(year <= 0 || !year){
            console.log("err");
            document.getElementById('valueBiciesto').innerHTML = "el numero no aplica";
        }else{
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                isBisi = 1;
            } else {
                isBisi = 2;
            }
            if( isBisi === 1){
                console.log("el año es biciesto");
                document.getElementById('valueBiciesto').innerHTML = "el año es biciesto";
            } 
            if( isBisi === 2){
                console.log("el año no es biciesto");
                document.getElementById('valueBiciesto').innerHTML = "el año no es biciesto";
            }
        }}
    });
});
