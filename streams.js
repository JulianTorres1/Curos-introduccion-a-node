const fs = require('fs');

let readablesStream = fs.createReadStream(__dirname + '/input.txt');
readablesStream.setEncoding('utf-8')
readablesStream.on('data', (chunk) => {
    console.log(chunk);
})

readablesStream.on('end', () => {
    console.log('data');
});