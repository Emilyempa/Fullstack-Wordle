export function validateInput(value, expectedLength) {

  if (!value || value.trim().length === 0) {
    return "Please enter a guess before submitting.";
  }
  
  const cleanedInput = value.replace(/\s/g, "");
  const onlyLetters = /^[a-zA-Z]+$/.test(cleanedInput);

  if (!onlyLetters) {
    return "Input contains invalid characters, only letters A-Z are allowed.";
  }

  if (cleanedInput.length !== expectedLength) {
    return `Your guess must be ${expectedLength} letters long.`;
  }

  return ""; 
}

export default validateInput;
