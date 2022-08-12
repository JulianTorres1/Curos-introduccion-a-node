const fs = require('fs');

function read(ruta, callback) {
    
    fs.readFile(ruta, (err, data) => {
        // leido
        console.log(data.toString());
    })
}

async function write(ruta, content, callback) {
    fs.writeFile(ruta, content, (err) => {
        if (err) {
            console.log('No he podido escribir el archivo!');
        }else  {
            console.log('Archivo Escrito correctamente!')
        }
    } );

}

async function deleteFile(ruta, callback) {
    fs.unlink (ruta, callback);
}


async function main(){
    //read(__dirname + '/archivo.txt');
    await write(__dirname + '/archivo-js.txt', 'soy un archivo escrito por Node js!');
    await deleteFile(__dirname + '/archivo-js.txt', console.log);
    
}

main();
