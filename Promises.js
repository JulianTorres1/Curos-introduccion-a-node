function hola(nombre){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log('Hola ' + nombre);
                resolve(nombre);
            },1000)
            
        }
    );
}

console.log('Comenzando Proceso');

hola('Nicolas')
    .then(
    (nombre) => {console.log('Proceso Terminado')}
);