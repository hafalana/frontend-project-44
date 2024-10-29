import readlineSync from "readline-sync";
import runBrainGames from "../cli.js";
import getRandomNum from "../getRandomNum.js";


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

    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i++) {
        const length = getRandomNum() % 6 + 5;
        const start = getRandomNum() % 10;
        const step = Math.floor(Math.random() * 3) + 2; 
        const missingIndex = Math.floor(Math.random() * length);

        const { progression, missingNumber } = generateProgression(length, start, step, missingIndex);

        const question = progression.join(' ');
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (parseInt(userAnswer, 10) === missingNumber) {
            console.log('Correct!');
        } else {
            console.log(`Your answer: ${userAnswer}`);
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${missingNumber}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default runProgressionGame;