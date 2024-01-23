function isValidDate(dateString) {
    // Tjek længden af strengen for at sikre, at den har det rigtige format (dd-mm-yyyy)
    if (dateString.length !== 10) {
      return false;
    }
  
    // Del strengen op i dag, måned og år
    var parts = dateString.split("-");
    if (parts.length !== 3) {
      return false;
    }
  
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
  
    // Tjek om dag, måned og år er numeriske værdier og inden for acceptable intervaller
    if (
      isNaN(day) || isNaN(month) || isNaN(year) ||
      day < 1 || month < 1 || year < 1900 ||
      day > 31 || month > 12 || year > 2099
    ) {
      return false;
    }
  
    // Tjek specifikke måneder og deres dage
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  
    // Skudårskontrol
    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
      daysInMonth[1] = 29; // Februar har 29 dage i skudår
    }
  
    // Tjek om dagen er gyldig for den pågældende måned
    if (day > daysInMonth[month - 1]) {
      return false;
    }
  
    return true; // Datoen er gyldig
}

module.exports = { isValidDate }