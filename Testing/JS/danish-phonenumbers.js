function checkDanishPhoneNumber(input) {
    // Regex pattern for validating Danish phone numbers
    const regex = /^\s*(?![0])(?:\d{8}|\d{4}\s\d{4}|\d{2}\s\d{2}\s\d{2}\s\d{2})\s*$/;
  
    // Test input against the regex pattern
    return regex.test(input);
}

module.exports = { checkDanishPhoneNumber };