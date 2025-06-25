let questions = [
  "What is the result of 3 * (2 + 4)?",
  "Which planet is known as the Red Planet?",
  "Who wrote the play 'Romeo and Juliet'?",
  "What is the capital of Nigeria?",
  "Which HTML tag is used to display an image?",
];

let correctAnswers = ["18", "mars", "william shakespeare", "abuja", "img"];

let quizDiv = document.getElementById("quiz");

function renderQuestions() {
  quizDiv.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    let p = document.createElement("p");
    p.innerText = i + 1 + "_ " + questions[i];
    quizDiv.appendChild(p);

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer" + i);
    quizDiv.appendChild(input);
  }
}

const QuizStarter = () => {
  // quiz.js

  renderQuestions();

  function checkAnswers() {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      let userAnswer = document
        .getElementById("answer" + i)
        .value.trim()
        .toLowerCase();
      if (userAnswer === correctAnswers[i].toLowerCase()) {
        score++;
      }
    }
    document.getElementById("score").innerText =
      "You scored " + score + " out of " + questions.length + " 🎉";
  }

  let time = 30;

  let Timer = setInterval(() => {
    document.querySelector(".Timer").innerText = `Time left: ${time} seconds`;
    time--;
    if (time < 0) {
      clearInterval(Timer);
      checkAnswers();
      document.querySelector(".Timer").innerText = "Time's up! ⏰";
    }
  }, 1000);

  document.querySelector(".Submit").addEventListener("click", () => {
    clearInterval(Timer);
    checkAnswers();
    document.querySelector(".Timer").innerText = "Quiz submitted! ✅";
    document.querySelector(".Submit").disabled = true;
  });

  document.querySelector(".Reset").addEventListener("click", () => {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("score").innerText = "";
    time = 30;
    Timer = setInterval(() => {
      document.querySelector(".Timer").innerText = `Time left: ${time} seconds`;
      time--;
      if (time < 0) {
        clearInterval(Timer);
        checkAnswers();
        document.querySelector(".Timer").innerText = "Time's up! ⏰";
      }
    }, 1000);
    renderQuestions();
  });

  document.querySelector(".start-btn").style.display = "none";
  document.querySelector(".start-btn").style.display = "block";
  document.querySelector(".Timer").style.display = "block";
  document.querySelector(".Submit").style.display = "block";
  document.querySelector(".Reset").style.display = "block";
  document.getElementById("score").style.color = "lime";
  document.getElementById("score").classList.add("pop");
};

document.querySelector(".start-btn").addEventListener("click", () => {
  QuizStarter();
  document.querySelector(".start-btn").style.display = "none";
});
