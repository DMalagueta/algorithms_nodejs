const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const volumeFunc = () => {
    rl.question('Raio: ', raio => {
        rl.question('Altura:', altura => {
            const volume = (3.14159 * raio^2)* altura;
            console.log(`Volume é ${volume}`);
            rl.close();
        })
    });
}

(async () => {
    console.log('Calcular Volume lata de oleo')
    await volumeFunc();
})();