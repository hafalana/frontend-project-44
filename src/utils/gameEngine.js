import readlineSync from 'readline-sync';

const gameEngine = (userName, gameDescription, getQuestionAndAnswer) => {
    console.log(gameDescription);
    const numberOfQuestions = 3;
    let correctAnswersCount = 0;

    while (correctAnswersCount < numberOfQuestions) {
        const { question, correctAnswer } = getQuestionAndAnswer();
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

export default gameEngine;