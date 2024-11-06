import gameEngine from "../utils/gameEngine.js";
import getRandomNum from "../utils/getRandomNum.js";
import runBrainGames from "../cli.js";


const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
    const userName = runBrainGames();

    const getQuestionAndAnswer = () => {
        const number = getRandomNum();
        const question = number;
        const correctAnswer = isEven(number) ? 'yes' : 'no';
        return { question, correctAnswer };
    };

    gameEngine(userName, 'Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
};

export default runEvenGame;