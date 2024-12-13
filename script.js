// Questions array (adapted from your Java code)
const questions = [
  { question: "What is 2 + 2?", correctAnswer: "4", category: "Math" },
  { question: "What is the capital of France?", correctAnswer: "Paris", category: "Geography" },
  { question: "Which programming language is used for Android development?", correctAnswer: "Java", category: "Programming" },
  { question: "What is the boiling point of water?", correctAnswer: "100", category: "Science" },
  { question: "What is H2O commonly known as?", correctAnswer: "Water", category: "Chemistry" },
  { question: "What organ pumps blood in the human body?", correctAnswer: "Heart", category: "Biology" },
];

// Display questions dynamically
const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `
    <p><strong>${index + 1}. ${q.question}</strong></p>
    <input type="text" id="answer-${index}" placeholder="Your answer">
  `;
  quizContainer.appendChild(questionDiv);
});

// Quiz submission logic
function submitQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    const userAnswer = document.getElementById(`answer-${index}`).value.trim();
    if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
      score++;
    }
  });

  // Display results
  const resultDiv = document.getElementById("result");
  if (score === questions.length) {
    resultDiv.innerHTML = `
      <p>You've got all the answers correct!</p>
      <p>You're doing great. Keep up the good work!</p>
    `;
  } else {
    resultDiv.innerHTML = `
      <p>You scored ${score} out of ${questions.length}.</p>
      <p>You need improvement in some areas. Keep practicing!</p>
    `;
  }
}
