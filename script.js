document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var startButton = document.getElementById("start-button");
    var questionContainer = document.getElementById("question-container");
    var endContainer = document.getElementById("end-container");
    var questionElement = document.getElementById("question");
    var choiceButtons = document.querySelectorAll(".choice");
    var scoreElement = document.getElementById("score");
    var initialsInput = document.getElementById("initials");
    var scoreForm = document.getElementById("score-form");
    var timerElement = document.getElementById("timer");
    var currentQuestionIndex = 0;
    var score = 0;
    var timeLeft = 60;
    var timerId;
  
    // Questions and answers
    var questions = [
      {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: 2
      },
      {
        question: "The condition in an if/else statement is enclosed within:",
        choices: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        answer: 2
      },
      {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: 3
      },
      {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
        answer: 2
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/bash", "For loops", "Console log"],
        answer: 4
      }
      // Add more questions as needed
    ];
  
    // Start the quiz
    startButton.addEventListener("click", startQuiz);
  
    // Function to start the quiz
    function startQuiz() {
      startButton.style.display = "none";
      questionContainer.style.display = "block";
      showQuestion();
      startTimer();
    }
  
    // Function to display a question
    function showQuestion() {
      var currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = currentQuestion.choices[i];
        choiceButtons[i].addEventListener("click", checkAnswer);
        choiceButtons[i].classList.remove("correct", "incorrect");
        choiceButtons[i].disabled = false; // Enable choice buttons
      }
    }
  
    // Function to check the selected answer
    function checkAnswer(event) {
      var selectedChoiceIndex = Array.from(choiceButtons).indexOf(event.target);
      var currentQuestion = questions[currentQuestionIndex];
      if (selectedChoiceIndex === currentQuestion.answer) {
        score+= (100/questions.length);
        event.target.classList.add("correct");
      } else {
        timeLeft -= 10; // Deduct 10 seconds for incorrect answer
        if (timeLeft < 0) {
          timeLeft = 0;
        }
        event.target.classList.add("incorrect");
      }
      disableChoiceButtons();
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        endQuiz();
      } else {
        setTimeout(showQuestion, 1000);
      }
    }
  
    // Function to disable choice buttons temporarily
    function disableChoiceButtons() {
      for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].disabled = true;
      }
    }
  
    // Function to end the quiz
    function endQuiz() {
      clearInterval(timerId);
      questionContainer.style.display = "none";
      endContainer.style.display = "block";
      scoreElement.textContent = score;
      scoreForm.addEventListener("submit", saveScore);
    }
  
    // Function to save the score
    function saveScore(event) {
      event.preventDefault();
      var initials = initialsInput.value.trim();
      // Save initials and score logic here
    }
  
    // Function to start the timer
    function startTimer() {
      timerId = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timerId);
          endQuiz();
        }
      }, 1000);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // ... Existing code ...
  
    // Function to start the quiz
    function startQuiz() {
      startButton.style.display = "none";
      questionContainer.style.display = "block";
      showQuestion();
      startTimer();
    }
  
    // ... Existing code ...
  
    // Function to end the quiz
    function endQuiz() {
      clearInterval(timerId);
      questionContainer.style.display = "none";
      endContainer.style.display = "block";
      scoreElement.textContent = score;
      scoreForm.addEventListener("submit", saveScore);
    }
  
    // Function to start the timer
    function startTimer() {
      timerId = setInterval(function () {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}`; // Update the timer display
        if (timeLeft <= 0) {
          clearInterval(timerId);
          endQuiz();
        }
      }, 1000);
    }
  });
  
  
  