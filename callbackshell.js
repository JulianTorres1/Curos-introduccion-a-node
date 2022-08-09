// funciones asincronas

function hola(nombre, miCallback) {
    console.log("no soy asincrono");
    setTimeout(function() {
        console.log("hola " + nombre);
        miCallback();
    },1000)
}
function hablar(CalbackBlaBla){
    setTimeout(function() {
        console.log('Bla Bla Bla');
    }, 1000);
}

hola('Nicolas',function () {
    console.log("Proceso Terminado");
});