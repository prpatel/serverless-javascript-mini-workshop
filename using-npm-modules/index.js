const random = require('random');

function main({max}) {
    let msg = 'You did not specify a max number, setting to 100';
    let maxNumber;
    let randomNumber;
    let extraMessage;
    if (max) {
        maxNumber = parseInt(max, 10);
        randomNumber = random.int(0, maxNumber)
    } else {
        extraMessage = `${msg} <br>`;
        maxNumber = 100;
        randomNumber = random.int(0, 100)
    }
    var body = `<html><body>${extraMessage}<h3> Random number between 0 and ${maxNumber}: <hr>${randomNumber}</h3></body></html>`
    return {body: body}
}

// for quick testing, uncomment below, and just run: 'node index.js' (from command line
// console.log(main({max: 50}));

exports.main = global.main = main;
