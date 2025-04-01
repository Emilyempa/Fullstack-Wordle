export function validateInput(value, expectedLength) {
  let input = value.trim();
  input = input.replace(/[^a-zA-Z]/g, "");

  if (!input) {
    return "Input is empty or contained input thats not allowed, please try again.";
  }

  if (input.length !== expectedLength) {
    return `Your guess must be ${expectedLength} letters long.`;
  }

  return "";
}

export default validateInput;
