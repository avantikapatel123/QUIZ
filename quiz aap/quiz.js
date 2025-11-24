

const questions = [
  { q: "Which tag is used for headings in HTML?", options: ["<p>", "<h1>", "<head>", "<title>"], ans: "<h1>" },

  { q: "Which CSS property is used to change text color?", options: ["color", "background", "font", "text"], ans: "color" },

  { q: "How do you create a variable in JavaScript?", options: ["make", "var", "define", "new"], ans: "var" },

  { q: "Which tag is used to display an image?", options: ["<img>", "<pic>", "<src>", "<image>"], ans: "<img>" },

  { q: "What is the full form of DOM?", options: ["Document Object Model", "Data Object Map", "Digital Object Maker", "None"], ans: "Document Object Model" },

  { q: "Which CSS property is used to change the background color?", options: ["bg", "color-bg", "background-color", "bcolor"], ans: "background-color" },

  { q: "Which of the following is a JavaScript array?", options: ["{}", "[]", "<>", "()"], ans: "[]" },

  { q: "Which tag is used to create a link in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], ans: "<a>" },

  { q: "Which tag is used to attach a CSS file to HTML?", options: ["<css>", "<style>", "<link>", "<script>"], ans: "<link>" },

  { q: "What is the file extension of JavaScript files?", options: [".html", ".js", ".css", ".txt"], ans: ".js" }
];



const welcomePage = document.querySelector(".welcome-page");
const startBtn = document.querySelector(".start");

const questionBox = document.querySelector(".question-box");
const optionsBox = document.querySelector(".options-box");
const resultBox = document.querySelector(".result-box");

const qText = document.querySelector(".question");
const optBtns = document.querySelectorAll(".opt");

const emoji = document.querySelector(".emoji");
const msg = document.querySelector(".msg");
const detail = document.querySelector(".detail");
const nextBtn = document.querySelector(".next");


let index = 0;
let correctCount = 0;
let wrongCount = 0;

startBtn.addEventListener("click", () => {
  welcomePage.classList.remove("active");
  questionBox.classList.add("active");
  optionsBox.classList.add("active");
  loadQuestion();
});


function loadQuestion() {
  const data = questions[index];

  qText.textContent = `(${index + 1}/${questions.length})  ${data.q}`;

  optBtns.forEach((btn, i) => {
    btn.textContent = data.options[i];
    btn.onclick = () => checkAnswer(btn.textContent);
  });

  resultBox.classList.remove("active");
}


function checkAnswer(selected) {
  const correct = questions[index].ans;

  questionBox.classList.remove("active");
  optionsBox.classList.remove("active");
  resultBox.classList.add("active");

  if (selected === correct) {
    emoji.textContent = "🎉";
    msg.textContent = "Correct!";
    correctCount++;
  } else {
    emoji.textContent = "😢";
    msg.textContent = "Wrong!";
    wrongCount++;
  }

  detail.innerHTML = `
    Correct Answer: <b>${correct}</b><br><br>
    ✔ Correct: <b>${correctCount}</b><br>
    ❌ Wrong: <b>${wrongCount}</b><br>
  `;
}


nextBtn.addEventListener("click", () => {
  index++;

  if (index >= questions.length) {
    alert(
      `🎉 Quiz Completed!\n\n✔ Correct: ${correctCount}\n❌ Wrong: ${wrongCount}\n📌 Total Questions: ${questions.length}`
    );
    location.reload();
  } else {
    questionBox.classList.add("active");
    optionsBox.classList.add("active");
    resultBox.classList.remove("active");
    loadQuestion();
  }
});
