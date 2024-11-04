import readlineSync from "readline-sync";
import runBrainGames from "../cli.js";
import getRandomNum from "../getRandomNum.js";


const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

const runGcdGame = () => {
    const userName = runBrainGames();

    console.log("Find the greatest common divisor of given numbers.");

    for (let i = 0; i < 3; i++) {
        const num1 = getRandomNum();
        const num2 = getRandomNum();
        const correctAnswer = gcd(num1, num2);

        const question = `${num1} ${num2}`;
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`Your answer: ${userAnswer}`);
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${userName}!`);
}

export default runGcdGame;