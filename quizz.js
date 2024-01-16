const quizData = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        a: "Germany",
        b: "Argentina",
        c: "France",
        d: "Brazil",
        correct: "c",
    },
    {
        question: "Who is the all-time top scorer in the history of the UEFA Champions League?",
        a: "Lionel Messi",
        b: "Cristiano Ronaldo",
        c: "Robert Lewandowski",
        d: "Neymar",
        correct: "b",
    },
    {
        question: "Which club has won the most English Premier League titles?",
        a: "Liverpool",
        b: "Manchester United",
        c: "Arsenal",
        d: "Chelsea",
        correct: "b",
    },
    {
        question: "In which year did Lionel Messi win his first Ballon d'Or award?",
        a: "2008",
        b: "2010",
        c: "2012",
        d: "2015",
        correct: "a",
    },
    {
        question: "Who is known as the 'Egyptian King' in the world of football?",
        a: "Sadio Mane",
        b: "Mohamed Salah",
        c: "Riyad Mahrez",
        d: "Hakim Ziyech",
        correct: "b",
    },
    {
        question: "Which country hosted the 2014 FIFA World Cup?",
        a: "Germany",
        b: "Brazil",
        c: "Russia",
        d: "South Africa",
        correct: "b",
    },
    {
        question: "Who is the manager of the Manchester City football team?",
        a: "Jurgen Klopp",
        b: "Pep Guardiola",
        c: "Thomas Tuchel",
        d: "Ole Gunnar Solskjaer",
        correct: "b",
    },
    {
        question: "Which player holds the record for the most goals scored in a single UEFA Champions League season?",
        a: "Lionel Messi",
        b: "Cristiano Ronaldo",
        c: "Neymar",
        d: "Robert Lewandowski",
        correct: "d",
    },
    {
        question: "In which stadium does the UEFA Champions League final usually take place?",
        a: "Camp Nou",
        b: "Old Trafford",
        c: "Wembley Stadium",
        d: "Allianz Arena",
        correct: "c",
    },
    {
        question: "Who won the FIFA Women's World Cup in 2019?",
        a: "Germany",
        b: "USA",
        c: "France",
        d: "Brazil",
        correct: "b",
    },
    {
        question: "Which player is known as the 'Egyptian Messi'?",
        a: "Mohamed Salah",
        b: "Sadio Mane",
        c: "Riyad Mahrez",
        d: "Hakim Ziyech",
        correct: "a",
    },
    {
        question: "In which country did the first recorded game of football take place?",
        a: "England",
        b: "Brazil",
        c: "Italy",
        d: "Germany",
        correct: "a",
    },
    {
        question: "Who is the captain of the French national football team?",
        a: "Paul Pogba",
        b: "Kylian Mbappe",
        c: "N'Golo Kante",
        d: "Hugo Lloris",
        correct: "d",
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        a: "Barcelona",
        b: "Real Madrid",
        c: "AC Milan",
        d: "Liverpool",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})