export default function isPhoneValid(number) {
  const regexStart = /^\+380/.test(number);
  const regexNumbers = /^[0-9]+$/.test(number.slice(1));

  return regexStart && regexNumbers && number.length === 14
    ? { isValid: true, number: number }
    : { isValid: false, number: number };
}
