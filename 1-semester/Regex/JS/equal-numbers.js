function indsætBindestreger(input) {
    return input.replace(/(\d{3})(\d{3})(\d{1,2})/, '$1-$2-$3');
}
  
let tekst = "XXX0124568";
let ændretTekst = indsætBindestreger(tekst);
console.log(ændretTekst); // Output: XXX012-456-8