const colors = require("colors/safe");

const from = parseInt(process.argv[2]);
const mid = parseInt(process.argv[3]);
const last = parseInt(process.argv[4]);

let colorer = colors.red;
let err = '';

if (typeof (from) !== 'number') {
    err += `\nError in first number ${from}. Typeof is ${typeof (from)}`;
}

if (typeof (mid) !== 'number') {
    err += `\nError in second number ${mid}. Typeof is ${typeof (mid)}`;
}

if (typeof (last) !== 'number') {
    err += `\nError in third number ${mid}. Typeof is ${typeof (last)}`;
}

if (from > 20) {
    err += `\nFirst number it is too great`;
}

if (mid > 20) {
    err += `\nSecond number it is too great`;
}

if (last > 20) {
    err += `\nSecond number it is too great`;
}

if (err) {
    console.log(colorer(err));
}

if (!err) {
    colorer = colors.green;
    console.log(colorer(`\nNumbers are Simple\n`));
}

let simples = [];
for (let i = from; i < mid; i++) {

    if (i > 2 && i % 2 > 0) {
        for (let j = 3; j <= i; j++) {

            if (i % j === 0 && i !== j) {
                break;
            }

            if (i % j === 0 && i === j) {

                simples.push(i);
            }
        }
    }
}


if (simples.length < 1) {
    colorer = colors.red;
    console.log(colorer(`No simples between ${from} and ${mid} and ${last}\n`))
}
else {
    console.log(colorer(`Simples between ${from} and ${mid} and ${last} are:\n` + simples + '\n'));
}