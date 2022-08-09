// funciones asincronas

function hola(nombre, miCallback) {
    console.log("no soy asincrono");
    setTimeout(function() {
        console.log("hola " + nombre);
        miCallback();
    },1000)
}

hola('Nicolas',function () {
    console.log("Proceso Terminado");
});