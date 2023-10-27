"use strict";
(function () {
    function getEdadNoReal() {
        return 100 + 100 + 300;
    }
    const nombre = 'Enver';
    const apellido = 'Flores';
    const edad = 33;
    //const salida = nombre + " " + apellido + " (" + edad + ")";
    // Enver Flores ( Edad:33)
    // Baketik
    // const salida = `imprime cadena con baketik`;
    const salida = `${nombre} \n${apellido} tiene edad de ( ${edad + 3} ) y se pone una edad no real de ${getEdadNoReal()}`;
    // Enver 
    // Flores tiene edad de ( 36 ) y se pone una edad no real de 
    // 500
    console.log(salida);
})();
