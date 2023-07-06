// Define your quiz questions and choices
var quiz = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Madrid", "Rome", "London"],
      correctAnswer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: 1
    }
  ];
  
  var questionElement = document.getElementById('question');
  var choicesElement = document.getElementById('choices');
  var submitButton = document.getElementById('submit');
  
  var currentQuestion = 0;
  var score = 0;
  
  function displayQuestion() {
    var question = quiz[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = '';
  
    for (var i = 0; i < question.choices.length; i++) {
      var choice = document.createElement('li');
      choice.textContent = question.choices[i];
      choice.setAttribute('data-index', i);
      choicesElement.appendChild(choice);
    }
  }
  
  function checkAnswer(event) {
    if (event.target.matches('li')) {
      var selectedChoice = event.target;
      var selectedAnswer = parseInt(selectedChoice.getAttribute('data-index'));
  
      var question = quiz[currentQuestion];
  
      if (selectedAnswer === question.correctAnswer) {
        selectedChoice.style.backgroundColor = '#a5d6a7';
        score++;
      } else {
        selectedChoice.style.backgroundColor = '#ef9a9a';
      }
  
      var choices = choicesElement.querySelectorAll('li');
      choices.forEach(function(choice) {
        choice.style.pointerEvents
      }