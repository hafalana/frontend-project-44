import gameEngine from "../utils/gameEngine.js";
import runBrainGames from "../cli.js";
import getRandomNum from "../utils/getRandomNum.js";


const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

const runGcdGame = () => {
    const userName = runBrainGames();

    const getQuestionAndAnswer = () => {
        const num1 = getRandomNum();
        const num2 = getRandomNum();
        const question = `${num1} ${num2}`; 
        const correctAnswer = gcd(num1, num2);
        return { question, correctAnswer: correctAnswer.toString() }; 
    };

    gameEngine(userName, 'Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
};

export default runGcdGame;