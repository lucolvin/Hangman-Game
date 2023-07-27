const words = [
    'ABANDON', 'ABBREVIATE', 'ABSTINENCE', 'ACCOMMODATE', 'ACCURATE', 'ACQUAINTANCE', 'ADAPTATION', 'ADEQUATE', 'ADVERSARY', 'ADVOCATE',
    'AFFLICTION', 'AGGRESSIVE', 'ALLEGIANCE', 'ALLOTMENT', 'AMBIGUOUS', 'AMPLE', 'AMPLIFY', 'ANECDOTE', 'ANIMATED', 'ANTICIPATE',
    'APPREHENSIVE', 'ARROGANT', 'ARTICULATE', 'ASCEND', 'ASPIRATION', 'ASSIMILATE', 'ASSUMPTION', 'ASTUTE', 'AUTHENTIC', 'AVID',
    'BANISH', 'BENIGN', 'BEWILDER', 'BREVITY', 'CALAMITY', 'CAMOUFLAGE', 'CAPABLE', 'CAUTIOUS', 'CELEBRATE', 'CENSORSHIP',
    'CHARISMA', 'COHERENT', 'COLLABORATE', 'COMMEMORATE', 'COMPATIBLE', 'COMPETENT', 'COMPLEMENT', 'COMPREHENSIVE', 'CONDESCEND', 'CONFISCATE',
    'CONSCIENTIOUS', 'CONSECUTIVE', 'CONTEMPLATE', 'CONTRADICT', 'CONTROVERSY', 'CONVICTION', 'COUNTERFEIT', 'CREDIBLE', 'CYNICAL', 'DECEIVE',
    'DEDICATE', 'DEFIANT', 'DELEGATE', 'DELIBERATE', 'DELINQUENCY', 'DELUSION', 'DEPICT', 'DEPRIVE', 'DESOLATE', 'DETRIMENTAL',
    'DEVISE', 'DILIGENT', 'DIMINISH', 'DISCREPANCY', 'DISPOSITION', 'DISSENT', 'DISTORT', 'DIVERSE', 'DIVULGE', 'ECCENTRIC',
    'ELABORATE', 'ELOQUENT', 'ELUSIVE', 'EMBARK', 'EMBELLISH', 'EMERGE', 'EMPATHY', 'ENDORSE', 'ENLIGHTEN', 'ENTHRALL',
    'ENVISION', 'ERADICATE', 'EVOKE', 'EXAGGERATE', 'EXEMPLIFY', 'EXUBERANT', 'FACADE', 'FEASIBLE', 'FICKLE', 'FICTIONAL',
    'FLOURISH', 'FORESEE', 'FORTITUDE', 'FRUGAL', 'FUTILE', 'GALLANT', 'GENERATE', 'GENUINE', 'GRACIOUS', 'GRATIFY',
    'GREGARIOUS', 'HARMONIOUS', 'HAUGHTY', 'HESITANT', 'HINDER', 'HOSTILE', 'HUMBLE', 'HUMILITY', 'HYBRID', 'HYPOTHESIS',
    'ILLUMINATE', 'ILLUSTRIOUS', 'IMMERSE', 'IMPARTIAL', 'IMPECCABLE', 'IMPLEMENT', 'IMPLY', 'INCORPORATE', 'INDIFFERENT', 'INDIGENOUS',
    'INDULGE', 'INEVITABLE', 'INNOVATIVE', 'INSTIGATE', 'INTEGRITY', 'INTENSE', 'INTERPRET', 'INTERVENE', 'INTREPID', 'INTRIGUE',
    'INTUITION', 'INUNDATE', 'INVOKE', 'IRONY', 'IRRATIONAL', 'ISOLATE', 'JEOPARDY', 'JUBILANT', 'JUDICIOUS', 'JUSTIFY',
    'KEEN', 'LAMENT', 'LAUDABLE', 'LEGACY', 'LENIENT', 'LOFTY', 'LUCID', 'LUMINOUS', 'MALICIOUS', 'MALLEABLE',
    'MANIFEST', 'MEAGER', 'MEDIATE', 'MELANCHOLY', 'METICULOUS', 'MIMIC', 'MITIGATE', 'MODEST', 'MUNDANE', 'NEGLIGENT',
    'NURTURE', 'OBNOXIOUS', 'OBSOLETE', 'OMINOUS', 'OPULENT', 'OSTENTATIOUS', 'PACIFY', 'PARADOX', 'PERCEPTIVE', 'PERSEVERE',
    'PERVASIVE', 'PESSIMISM', 'PLAUSIBLE', 'PLENTIFUL', 'PONDER', 'POTENT', 'PRAGMATIC', 'PRECEDENT', 'PREPOSTEROUS', 'PREREQUISITE',
    'PRESUME', 'PREVAIL', 'PROFICIENT', 'PROFOUND', 'PROHIBIT', 'PROLIFIC', 'PROVOKE', 'PSEUDONYM', 'PUNGENT', 'QUANDARY',
    'QUELL', 'QUIRK', 'RAVENOUS', 'RECLAIM', 'RECONCILE', 'REFUTE', 'REINFORCE', 'RELEVANT', 'RELINQUISH', 'RELUCTANT',
    'REMORSE', 'RENOUNCE', 'RESILIENT', 'REVOKE', 'RHETORIC', 'ROBUST', 'RUTHLESS', 'SANCTUARY', 'SATURATE', 'SCRUPULOUS',
    'SECLUDE', 'SEDENTARY', 'SERENE', 'SKEPTICAL', 'SOLICIT', 'SOLEMN', 'SOOTHE', 'SPONTANEOUS', 'STAGNANT', 'STEALTHY',
    'STIMULATE', 'STRIVE', 'SUBTLE', 'SUFFICE', 'SUMMIT', 'SUPERFLUOUS', 'SUPPLANT', 'SURPASS', 'SUSTAIN', 'TANGIBLE',
    'TENTATIVE', 'THRIVE', 'TIMID', 'TOLERATE', 'TORMENT', 'TRANSCEND', 'TRIVIAL', 'TUMULTUOUS', 'UBIQUITOUS', 'UNANIMOUS',
    'UNCANNY', 'UNDERMINE', 'UNDERSTATE', 'UNIQUE', 'UNPRECEDENTED', 'UNRAVEL', 'UNVEIL', 'URGENT', 'VAGUE', 'VEHEMENT',
    'VENERATE', 'VEX', 'VIABLE', 'VIGILANT', 'VIRTUE', 'VULNERABLE', 'WARY', 'WEARY', 'WHIMSICAL', 'WISTFUL',
    'WRITHE', 'ZEAL', 'ZEALOUS'
];

  
  let selectedWord = '';
  let guessedLetters = [];
  let maxAttempts = 6;
  
  const bodyParts = document.querySelectorAll('.hangman-figure span');
  
  // Function to initialize the game
  function initializeGame() {
      selectedWord = words[Math.floor(Math.random() * words.length)];
      guessedLetters = [];
      maxAttempts = 6;
  
      displayWord();
      displayLetters();
      resetHangmanFigure();
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
  
  // Function to reset the hangman figure
  function resetHangmanFigure() {
      bodyParts.forEach(part => part.style.display = 'none');
  }
  
  // Function to update the hangman figure after each incorrect guess
  function updateHangmanFigure() {
      const remainingAttempts = maxAttempts - guessedLetters.filter(letter => !selectedWord.includes(letter)).length;
      if (remainingAttempts < maxAttempts) {
          bodyParts[maxAttempts - remainingAttempts - 1].style.display = 'inline';
      }
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
        updateHangmanFigure();
    
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
  