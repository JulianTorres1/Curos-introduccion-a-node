const { exec } = require('child_process');
const { stdout } = require('nodemon/lib/config/defaults');

exec('neofetch', (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false;
    } else {
        console.log(stdout);
    }
})
function seRompe(a) {
    return a + z;
}


