const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = '';

  currentQuiz.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.className = 'option-btn';
    btn.addEventListener('click', () => {
      if(option === currentQuiz.answer) score++;
      currentQuestion++;
      if(currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    });
    optionsEl.appendChild(btn);
  });
}

function showResult() {
  document.getElementById('quiz-container').style.display = 'none';
  resultEl.style.display = 'block';
  resultEl.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();

