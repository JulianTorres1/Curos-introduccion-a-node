function hola(nombre, miCallback) {
    console.log("no soy asincrono");
    setTimeout(function() {
        console.log("hola " + nombre);
        miCallback();
    },1000)
}

function adios(nombre) {
    console.log('adios ' + nombre)
}

function hablar(callbackHablar){
    setTimeout(function (){
        console.log('Bla Bla Bla');
    },1000)
    callbackHablar();
}

hola('Nicolas',function () {
    hablar(function (params) {
        adios('nicolas');
    })
});
