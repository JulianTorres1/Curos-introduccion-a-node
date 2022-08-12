async function hola(nombre){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log('Hola ' + nombre);
                
                
            },1000)
            
        }
    );
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        console.log('Adios ' + nombre);
        resolve(nombre);
    },500)
}

//hola('Nicolas')
//    .then(
//    (nombre) => {console.log('Proceso Terminado')}
//);


async function main() {
    let nombre = await hola('Nicolas');
    await adios(nombre)
};


console.log('comenzando');
main();
