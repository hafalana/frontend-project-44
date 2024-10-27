import readlineSync from 'readline-sync';
import getRandomNum from "../getRandomNum.js";
import runBrainGames from "../cli.js";


const runEvenGame = () => {
    const userName = runBrainGames();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const isEven = (number) => number % 2 === 0;
    const numberOfQuestions = 3;
    let correctAnswersCount = 0;

    while (correctAnswersCount < numberOfQuestions) {
        const number = getRandomNum();

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(number) ? 'yes' : 'no'; 
        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); 
            console.log(`Let's try again, ${userName}!`);  
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;