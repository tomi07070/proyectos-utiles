const quizData = [
    {
        question: 'What is the powerhouse of the cell?',
        a: ' Nucleus',
        b: 'Mitochondria',
        c: 'Endoplasmic reticulum',
        d: 'Golgi apparatus',
        correct : 'b',
    }, {
        question: 'Which continent is known as the "Land of the Rising Sun"?',
        a: ' Europe',
        b: 'Africa',
        c: 'Asia',
        d: 'South America',
        correct : 'c',
    }, {
        question: 'Who wrote the play "Romeo and Juliet"?',
        a: ' William Shakespear',
        b: 'Charles Dickens',
        c: 'Jane Austen',
        d: 'Mark Twain',
        correct : 'a',
    } , {
        question: 'In which year did Christopher Columbus first reach the Americas?',
        a: '1492',
        b: '1520',
        c: '1270',
        d: '1312',
        correct : 'a',
    }, {
        question: 'Which film won the Academy Award for Best Picture in 2020?',
        a: 'Parasite',
        b: '1917',
        c: 'Joker',
        d: 'The Shape of Water',
        correct : 'a',
    }, {
        question: 'In which year did the world war 2 happened?',
        a: '1987',
        b: '1891',
        c: '1939',
        d: '1912',
        correct : 'c',
    },
]

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('La-a');
const b_text = document.getElementById('La-b');
const c_text = document.getElementById('La-c');
const d_text = document.getElementById('La-d');
const submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');  // Fix typo here

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {  // Fix typo here
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});