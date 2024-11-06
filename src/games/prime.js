import gameEngine from "../utils/gameEngine.js";
import runBrainGames from "../cli.js";
import getRandomNum from "../utils/getRandomNum.js";


const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const runPrimeGame = () => {
    const userName = runBrainGames();

    const getQuestionAndAnswer = () => {
        const number = getRandomNum() % 100 + 1; 
        const question = number;
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        return { question, correctAnswer };
    };

    gameEngine(userName, 'Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer);
};

export default runPrimeGame;