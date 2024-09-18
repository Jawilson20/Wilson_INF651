// Simple Guessing Game
function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;
    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
        if (guess === randomNumber) {
            alert("Congratulations! You guessed the correct number.");
        } else {
            alert("Wrong guess. Try again!");
        }
    }
}

// Password Validator
function passwordValidator() {
    let password = prompt("Set your password:");
    let confirmPassword;
    do {
        confirmPassword = prompt("Re-enter your password for confirmation:");
        if (confirmPassword !== password) {
            alert("Passwords do not match. Please try again.");
        }
    } while (confirmPassword !== password);
    alert("Password confirmed successfully.");
}

// Multiplication Table Generator
function multiplicationTable() {
    let number = parseInt(prompt("Enter a number to generate its multiplication table:"));
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Grade Evaluator
function gradeEvaluator() {
    let score = parseInt(prompt("Enter your score (0-100):"));
    if (score >= 90 && score <= 100) {
        alert("Your grade is A.");
    } else if (score >= 80 && score < 90) {
        alert("Your grade is B.");
    } else if (score >= 70 && score < 80) {
        alert("Your grade is C.");
    } else if (score >= 60 && score < 70) {
        alert("Your grade is D.");
    } else if (score < 60) {
        alert("Your grade is F.");
    } else {
        alert("Invalid score entered.");
    }
}

// Day Finder
function dayFinder() {
    let dayNumber = parseInt(prompt("Enter a number (1-7) to find the corresponding day of the week:"));
    switch (dayNumber) {
        case 1: alert("Sunday"); break;
        case 2: alert("Monday"); break;
        case 3: alert("Tuesday"); break;
        case 4: alert("Wednesday"); break;
        case 5: alert("Thursday"); break;
        case 6: alert("Friday"); break;
        case 7: alert("Saturday"); break;
        default: alert("Invalid input. Please enter a number between 1 and 7.");
    }
}

// Call any function you want to test
guessingGame();
passwordValidator();
multiplicationTable();
gradeEvaluator();
dayFinder();
