const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "What is my favorite breakfast?",
        answers: {
            l: "Toast",
            m: "Muesli",
            n: "Hot Milk with rusk"
        },
        correctAnswer: "m"
    },

    {
        question: "Who has been my longest 'best' friend",
        answers: {
            o: "Rott",
            p: "Aira",
            q: "You"
        },
        correctAnswer: "o"
    },

    {
        question: "What is Moss' favourite dinner",
        answers: {
            r: "Dosa",
            s: "Dal Rice",
            t: "Burger"
        },
        correctAnswer: "s"
    },
    {
        question: "Who is the cutiest?",
        answers: {
            q: "Lara Croft",
            r: "Me",
            s: "You"
        },
        correctAnswer: "s"
    },{
        question: "My favourite number?",
        answers: {
            x: "π",
            y: "e",
            z: "i"
        },
        correctAnswer: "y"
    },
    {
        question: "My first crush?",
        answers: {
            1: "Leon Kennedy",
            2: "Ellie Morgan",
            3: "Lara Croft"
        },
        correctAnswer: "2"
    }
];

function buildQuiz() {
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(

                `<div class="question">${currentQuestion.question}</div>

            <div class="answers">${answers.join('')}</div><br>`
        );

    });
    quizContainer.innerHTML = output.join('') ;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
