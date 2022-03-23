const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


const getNumbers = () => {
    return new Promise((resolve) => {
        rl.question('Number 1 : ', a1 => {
            rl.question('Number 2 : ', a2 => {

                const d1 = a1*a1;
                const d2 = a2*a2;

                console.log(`Double of ${a1} is ${d1} and of ${a2} is ${d2}`);
                resolve();

            });
        });
    });
};


(async () => {
    await getNumbers();
    rl.close();
})();