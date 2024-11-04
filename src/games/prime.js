import readlineSync from "readline-sync";
import runBrainGames from "../cli.js";
import getRandomNum from "../getRandomNum.js";


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

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const numberOfQuestions = 3;
    let correctAnswersCount = 0;

    while (correctAnswersCount < numberOfQuestions) {
        const number = getRandomNum() % 100 + 1; 
        const question = number;
        const correctAnswer = isPrime(number) ? 'yes' : 'no'; 

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default runPrimeGame;