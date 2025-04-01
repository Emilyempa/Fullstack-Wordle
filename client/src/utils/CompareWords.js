export function CompareWords(guess, correct) {
   
    const uppercaseGuess = guess.toUpperCase();
    const uppercaseCorrect = correct.toUpperCase();
  
    const guessArray = Array.from(uppercaseGuess);
    const correctArray = Array.from(uppercaseCorrect);
    const resultArray = [];
    const correctCopy = [...correctArray];
  
    guessArray.forEach((letter, i) => {
      if (letter === correctArray[i]) {
        resultArray.push({ letter: letter, result: "correct" });
        correctCopy[i] = null;
      } else {
        resultArray.push(null);
      }
    });
  
    guessArray.forEach((letter, i) => {
      if (resultArray[i] === null) {
        if (correctCopy.includes(letter)) {
          resultArray[i] = { letter: letter, result: "misplaced" };
          correctCopy[correctCopy.indexOf(letter)] = null;
        } else {
          resultArray[i] = { letter: letter, result: "incorrect" };
        }
      }
    });
    
    return resultArray;
  }