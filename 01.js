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

    for (let i = 0; i < modules.length; i++) {
        let fuel = fuelReq(modules[i])
        fuelSum += fuel
        let more = fuelReq(fuel)
        more > 0 ? modules.push(fuel) : null
    }
    console.log('Fuel Required: ', fuelSum)
}

function fuelReq(mass) {
    let fuel = Math.floor(mass/3) - 2
    
    if (fuel > 0) {
        return fuel
    } else {
        return 0
    }
}