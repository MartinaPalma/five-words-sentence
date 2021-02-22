const readline = require('readline');
const consola = require('consola');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askFiveWords() {
    rl.question('Please, insert a five words sentence?', (answer) => {
        const fiveWords = parseInt(answer);

        if (!isNan(fiveWords)) {
            consola.error(`${answer} is not a five words sentence`);
            askFiveWords();

        } else if (fiveWords < 5 === false) {
            consola.error(`${answer} is not a five words sentence`);
            askFiveWords();

        } else if (fiveWords > 5 === true) {
            consola.success(`Very good! Is a five words sentence: ${answer}`);
            rl.close();
        }
    });
}
askFiveWords();