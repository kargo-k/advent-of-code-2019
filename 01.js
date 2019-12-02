const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) => lines.push(Number(line)));
rl.on('close', (line) => compute(lines))

// cat input01.txt | node 01.js

function compute(modules) {
    let fuelSum = 0
    modules.forEach(mass => {
        fuelSum += Math.floor(mass/3) - 2
    })
    console.log('Fuel Required: ', fuelSum)
}