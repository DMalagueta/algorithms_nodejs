const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const trapezeArea = () => {
    return new Promise((resolve) => {
        rl.question('Base maior: ', bMaior =>{
            rl.question('Base menor: ', bMenor =>{
                rl.question('Altura: ', altura => {
                    const area = ((Number(bMaior) + Number(bMenor)) * altura) / 2;
                    console.log('----------------------------');
                    console.log(`Area do trapézio é de ${area}`);
                    resolve()
                })
            });
        });
    })
};

(async () => {
    console.log('=========================');
    console.log('Calcular Area do Trapézio');
    console.log('=========================');
    await trapezeArea();
    rl.close();
})()