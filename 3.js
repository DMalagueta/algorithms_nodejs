const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question('Fahrenheit: ', a => {
        const celsius = (a-32) * (5/9);
        console.log(`${a}ºF em Celcius são ${celsius}ºC`);
        rl.close();
});