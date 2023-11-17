function indsætApostrof(str) {
    return str.replace(/(\w)\1{2}(\w)/g, '$1$1\'$2');
}
  
// Eksempel:
let tekst = "frisbeeer og frisbeeer";
let ændretTekst = indsætApostrof(tekst);
console.log(ændretTekst); // Output: frisbee'er