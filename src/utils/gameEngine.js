import readlineSync from 'readline-sync';
import runBrainGames from '../cli.js';

const gameEngine = (gameDescription, getQuestionAndAnswer, numberOfQuestions = 3) => {
    const userName = runBrainGames();

    console.log(gameDescription);

    for (let i = 0; i < numberOfQuestions; i += 1) {
        const { question, correctAnswer } = getQuestionAndAnswer();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;