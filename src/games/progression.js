import gameEngine from "../utils/gameEngine.js";
import runBrainGames from "../cli.js";
import getRandomNum from "../utils/getRandomNum.js";


const generateProgression = (length, start, step, missingIndex) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    const missingNumber = progression[missingIndex];
    progression[missingIndex] = '..';
    return { progression, missingNumber };
};

const runProgressionGame = () => {
    const userName = runBrainGames();

    const getQuestionAndAnswer = () => {
        const length = getRandomNum() % 6 + 5;
        const start = getRandomNum() % 10;
        const step = Math.floor(Math.random() * 3) + 2; 
        const missingIndex = Math.floor(Math.random() * length);
        const { progression, missingNumber } = generateProgression(length, start, step, missingIndex);
        const question = progression.join(' ');
        return { question, correctAnswer: missingNumber.toString() };
    };   

    gameEngine(userName, 'What number is missing in the progression?', getQuestionAndAnswer);
};

export default runProgressionGame;




