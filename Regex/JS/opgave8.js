function isValidDate(dateString) {
    // Opret et regulært udtryk for at matche datoen i formatet dd-mm-yyyy
    var regex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(19\d{2}|20\d{2})$/;
  
    // Test om strengen matcher det specificerede datoformat
    if (regex.test(dateString)) {
      // Hent årstallet fra strengen
      var year = parseInt(dateString.split("-")[2], 10);
      
      // Tjek om årstallet er inden for det gyldige interval (1900 - 2099)
      if (year >= 1900 && year <= 2099) {
        return true; // Gyldig dato
      }
    }
    
    return false; // Ugyldig dato
}
  
// Eksempel på brug:
var inputDate = "31-04-2023";
if (isValidDate(inputDate)) {
    console.log(inputDate + " er en gyldig dato i formatet dd-mm-yyyy og ligger mellem 1900 og 2099.");
} else {
    console.log(inputDate + " er enten ikke i det korrekte format eller ligger uden for det tilladte interval.");
}

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
  
// Eksempel på brug:
var inputDate = "31-12-2023";
if (isValidDate(inputDate)) {
    console.log(inputDate + " er en gyldig dato i formatet dd-mm-yyyy og ligger mellem 1900 og 2099.");
} else {
    console.log(inputDate + " er enten ikke i det korrekte format eller ligger uden for det tilladte interval.");
}  