const words = [

    'HELP'
   
];

let selectedWord = '';
let guessedLetters = [];
let maxAttempts = 6;
let incorrectAttempts = 0; // New variable to keep track of incorrect attempts

const logCabinImages = [
    'https://github.com/lucolvin/Game-V2/blob/main/1.jpg', // Replace with URLs for log cabin stages
    'path/to/log_cabin_stage1.jpg',
    'path/to/log_cabin_stage2.jpg',
    // Add URLs for more log cabin stages as needed
    // Ensure the URLs correspond to the stages of cabin completion (foundation to fully built)
];

// Function to initialize the game
function initializeGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    maxAttempts = 6;
    incorrectAttempts = 0; // Reset incorrect attempts

    displayWord();
    displayLetters();
    resetLogCabin();
}

// Function to display the word as underscores and guessed letters
function displayWord() {
    const wordDisplay = document.getElementById('word-display');
    const displayedWord = selectedWord
        .split('')
        .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
    wordDisplay.textContent = displayedWord;
    return displayedWord;
}

// Function to display the letters to guess
function displayLetters() {
    const lettersContainer = document.getElementById('letters-container');
    lettersContainer.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .map((letter) => `<div class="letter" onclick="checkLetter('${letter}')">${letter}</div>`)
        .join('');
}

// Function to update the log cabin figure after each incorrect guess
function updateLogCabin() {
    if (incorrectAttempts < logCabinImages.length) {
        // Set the log cabin image based on the number of incorrect attempts
        const logCabinContainer = document.getElementById('logCabinContainer');
        logCabinContainer.style.backgroundImage = `url('${logCabinImages[incorrectAttempts]}')`;
    }
}

// Function to reset the log cabin figure
function resetLogCabin() {
    const logCabinContainer = document.getElementById('logCabinContainer');
    logCabinContainer.style.backgroundImage = `url('${logCabinImages[0]}')`; // Reset to the foundation image
}

// Function to handle the lose scenario
function handleLose() {
    alert('You lost! The word was: ' + selectedWord);
    initializeGame();
}

// Function to handle the win scenario
function handleWin() {
    alert('Congratulations! You guessed the word: ' + selectedWord);
    initializeGame();
}

// Function to check if the guessed letter is correct
function checkLetter(letter) {
    if (guessedLetters.includes(letter)) {
        // Letter has already been guessed, ignore
        return;
    }

    guessedLetters.push(letter);
    const displayedWord = displayWord();

    if (!selectedWord.includes(letter)) {
        // Incorrect guess
        maxAttempts--;
        incorrectAttempts++;
        updateLogCabin();

        if (maxAttempts === 0) {
            // Lose condition
            handleLose();
        }

    } else if (!displayedWord.includes('_')) {
        // Win condition
        handleWin();
    }
}

// Start the game when the page loads
window.onload = initializeGame;
